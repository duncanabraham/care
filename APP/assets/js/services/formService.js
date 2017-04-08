'use strict';

class FormService {
  constructor(options) {
    this.order = options && options.order ? options.order : 0;
    this.fields = [];
    this.name = options.name ? options.name : 'New Form';
  }
};

care.factory('formService', [function () {
  return {
    Form: FormService
  };
}]);
