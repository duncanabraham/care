'use strict';

care.controller('AdminController', ['$scope', 'fieldService', function ($scope, fieldService) {
  $scope.adminPartial = 'views/admin/users.html';
  $scope.fieldTypes = fieldService.formFields();
  $scope.adminClick = (pageName) => {
    console.log('pageName: ', pageName);
    $scope.adminPartial = 'views/admin/' + pageName.toLowerCase() + '.html';
  };
}]);
