/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */
'use strict';

const bcrypt = require('bcrypt');

class Session {
  constructor() {
    this.loggedIn = [];
  }
  makeGUID() {
    return new Promise((resolve) => {
      resolve('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      }));
    });
  }
  getUser(user) {
    return new Promise((resolve, reject) => {
      let query = 'select * from user where username = $1';
      User.getDatastore().sendNativeQuery(query, [user.username], (err, user) => {
        if (err) {
          reject('Invalid username');
        } else {
          let thisUser = user;
          if (user && user.rows) {
            thisUser = user.rows[0];
          } else {
            thisUser = { password: '' };
          }
          resolve(thisUser);
        }
      });
    });
  }
  checkPassword(sentPassword, storedPassword) {
    return new Promise((resolve) => {
      bcrypt.compare(sentPassword, storedPassword, function (err, valid) {
        if (err || !valid) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
  login(req, res) {
    if (req.method === 'POST') {
      let user = req.body;
      let dbUser;
      if (user.username && user.password) {
        thisSession.getUser(user)
          .then((data) => {
            dbUser = data;
            return thisSession.checkPassword(user.password, dbUser.password);
          })
          .then((success) => {
            if (success) {
              req.session.authenticated = true;
              if (dbUser.password) {
                delete dbUser.password;
              }
              dbUser.authenticated = true;
              req.session.User = _.assign({}, dbUser);
              thisSession.makeGUID()
                .then((guid) => {
                  dbUser.guid = guid;
                  req.session.guid = guid;
                  res.status(200).send(dbUser);
                });
            } else {
              res.status(403).send('Forbidden');
            }
          })
          .catch((err) => {
            sails.log.error(err);
            res.status(403).send(err);
          });
      } else {
        res.status(403).end('Invalid Login');
      }
    } else {
      res.end('Nope!');
    }
  }
  logout(req, res) {
    res.send('Logout');
  }
  ping(req, res) {
    res.send('Pong');
  }
}

let thisSession = new Session();

module.exports = {
  login: thisSession.login,
  logout: thisSession.logout,
  ping: thisSession.ping
};
