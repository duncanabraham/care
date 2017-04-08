'use strict';

care.controller('AdminController', ['$scope', 'fieldService', 'formService', function ($scope, fieldService, formService) {
  $scope.adminPartial = 'views/admin/users.html';
  let thisPalette = new fieldService.Field('tb', { label: 'Test' });
  $scope.forms = [];
  $scope.currentForm = null;
  $scope.currentFormName = 'users';
  $scope.palette = [];

  $scope.itemClick = (type) => {
    if ($scope.currentForm) {
      console.log('type: ', type);
      let newField = new fieldService.Field(type.toLowerCase(), {order: $scope.currentForm.fields.length + 1});
      console.log('field: ', newField);
      $scope.currentForm.fields.push(newField);
    }
  };

  $scope.loadForm = (form) => {
    $scope.currentForm = form;
  };

  $scope.addForm = () => {
    let newForm = new formService.Form({ order: $scope.forms.length + 1, name: null });
    $scope.forms.push(newForm);
  };

  let showPalette = () => {
    if ($scope.currentFormName === 'forms') {
      $scope.palette = thisPalette.palette();
      console.log('palette: ', $scope.palette);
    }
  };

  $scope.adminClick = (pageName) => {
    $scope.adminPartial = 'views/admin/' + pageName.toLowerCase() + '.html';
    $scope.currentFormName = pageName.toLowerCase();
    showPalette();
  };
}]);
