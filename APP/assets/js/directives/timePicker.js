'use strict';

let zero = function (n) {
  return (n + '').length < 2 ? '0' + n : n.toString();
};

care.directive('timePicker', [function () {
  return {
    require: 'ngModel',
    template: '<div class="form-group unpadfc"><div class="col-xs-5"><select ng-model="hours" ng-options="item as item for item in hourList" class="form-control"></select></div><div class="col-xs-2 text-center"> : </div><div class="col-xs-5"><select ng-model="mins" ng-options="item as item for item in minList" class="form-control"></select></div></div>',
    replace: true,
    controller: ['$scope', function ($scope) {
      $scope.hours = '00';
      $scope.mins = '00';
      $scope.hourList = [];
      $scope.minList = [];
      for (let i = 0; i < 24; i++) {
        $scope.hourList.push(zero(i));
      }
      for (let i = 0; i < 60; i = i + 5) {
        $scope.minList.push(zero(i));
      }
    }]
  };
}]);
