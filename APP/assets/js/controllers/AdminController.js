'use strict';

care.controller('AdminController', ['$scope', function ($scope) {
  $scope.adminPartial = 'views/admin/users.html';
  $scope.adminClick = (pageName) => {
    console.log('pageName: ',pageName);
    $scope.adminPartial = 'views/admin/' + pageName.toLowerCase() + '.html';
  }
}]);
