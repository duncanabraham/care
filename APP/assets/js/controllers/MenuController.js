'use strict';

care.controller('MenuController', ['$scope', 'configService', function ($scope, configService) {
  $scope.linkClick = (page) => {
    let newPage = 'views/member/' + page + '.html';
    configService.setKey('currentPage', newPage);
    configService.setPath(page);
  }
}]);
