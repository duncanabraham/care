'use strict';

class Api {
  constructor ($http) {
    this.http = $http;
    this.apiPath = 'http://localhost:3333/';
  }

  get (model, itemId) {
    return this.http.get(this.apiPath + model + '/' + itemId);
  }

  delete (model, itemId) {
    return this.http.delete(this.apiPath + model + '/' + itemId);
  }

  put (model, data) {
    return this.http.put(this.apiPath + model, data);
  }

  post (model, data) {
    return this.http.post(this.apiPath + model, data);
  }
}

care.factory('apiService', ['$http', function ($http) {
  return new Api($http);
}]);
