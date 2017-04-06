'use strict';
care.controller('LoginController', ['$scope', 'apiService', 'configService', function ($scope, apiService, configService) {
  $scope.user = {
    username: '',
    password: ''
  };
  $scope.login = () => {
    if ($scope.user.username && $scope.user.password) {
      apiService.post('session/login', $scope.user)
        .then((data) => {
          configService.setKey('currentUser', data.data);
          configService.setPath('/home');
        })
        .catch((err) => {
          console.log('error: ', err);
          configService.setKey('currentUser', null);
        });
    } else {
      $scope.message = 'Please check your credentials and try again';
    }
  };
}]);
