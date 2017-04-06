'use strict';

care.controller('HomeController', ['$scope', '$route', 'configService', function ($scope, $route, configService) {

  configService.checkLoggedIn();

  if ($route.current.$$route.pageLink) {
    configService.setKey('currentPage', $route.current.$$route.pageLink);
  }
  $scope.currentPage = configService.getKey('currentPage');  
}]);
