'use strict';

class Form {
  constructor(options) {
    this.order = options.order || 0;
    this.fields = [];
  }
};

care.factory('fieldService', [function () {
  return {
    newForm: (options) => { return new Form(options); }
  };
}]);
