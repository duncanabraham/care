/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */
'use strict';
const bcrypt = require('bcrypt');
const passwordHistoryCount = require('../config/config.json').security.passwordHistoryCount;
const passwordMinLength = require('../config/config.json').security.passwordMinLength;
var makePassword = function (attrs, next) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    } else {
      bcrypt.hash(attrs.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        } else {
          attrs.password = hash;
          return next(null, attrs);
        }
      });
    }
  });
};
var createPassword = function (attrs, next) {
  PwHistory.create({ practitioner: attrs.id, password: attrs.password }, function () {
    var sql = 'DELETE FROM `pwhistory` WHERE practitioner=$1 and id NOT IN (SELECT id FROM (SELECT id FROM `pwhistory` where practitioner=$1 ORDER BY id DESC LIMIT $2) keepLastN);';
    PwHistory.getDatastore().sendNativeQuery(sql, [attrs.id, passwordHistoryCount], function (err) {
      next(err);
    });
  });
};
var passwordExists = function (attrs, next) {
  PwHistory.find({ practitioner: attrs.id }, function (err, data) {
    if (err) {
      return next(err);
    } else {
      if (!data) {
        data = [];
      }
      var error = null;
      async.each(data, function (thisOldPassword, cb) {
        bcrypt.compare(attrs.password, thisOldPassword.password, function (err, valid) {
          if (err || !valid) {
            return cb();
          }
          error = 'REUSE';
          cb();
        });
      }, function () {
        return next(error);
      });
    }
  });
};
module.exports = {
  attributes: {
    fullName: { 'type': 'string' },
    username: { 'type': 'string', 'unique': true, 'required': true },
    password: { 'type': 'string', 'required': true, 'minLength': passwordMinLength }
  },
  beforeCreate: function (attrs, next) {
    makePassword(attrs, next);
  },
  afterCreate: function (attrs, next) {
    createPassword(attrs, next);
  },
  beforeUpdate: function (attrs, next) {
    if (attrs.newpassword && attrs.newpassword.length > 0) {
      attrs.password = attrs.newpassword;
      passwordExists(attrs, function (err) {
        if (err) {
          return next(err);
        }
        makePassword(attrs, function (err, thisPrac) {
          if (err || !thisPrac) {
            return next(err);
          }
          createPassword(attrs, function (err) {
            next(err);
          });
        });
      });
    } else {
      return next();
    }
  }
};
