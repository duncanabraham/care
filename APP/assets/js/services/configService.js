'use strict';

const config = {};

care.factory('configService', ['$location', function ($location) {
  return {
    config: config,
    setKey: function (k, v) {
      config[k] = v;
    },
    getKey: function (k) {
      return config[k];
    },
    setPath: function (path) {
      $location.path(path);
    },
    checkLoggedIn: function () {
      let currentUser = config.currentUser;
      if (!currentUser || (currentUser && !currentUser.authenticated)) {
        this.setPath('/login');
      }
    }
  };
}]);
