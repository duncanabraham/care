/**
 *     ██████╗ █████╗ ██████╗ ███████╗
 *    ██╔════╝██╔══██╗██╔══██╗██╔════╝
 *    ██║     ███████║██████╔╝█████╗
 *    ██║     ██╔══██║██╔══██╗██╔══╝
 *    ╚██████╗██║  ██║██║  ██║███████╗
 *     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
 *      CARE CASE MANAGEMENT SYSTEM
 */
'use strict';

const care = angular.module('care', ['ngRoute', 'ngSanitize', 'pascalprecht.translate', 'wingify.timePicker']);

care.config([
  '$routeProvider',
  function ($routeProvider) {
    var viewBase = 'views/';
    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/login', {
        templateUrl: viewBase + 'public/login.html',
        controller: 'LoginController',
        title: 'Login'
      })
      .when('/home', {
        templateUrl: viewBase + 'templates/pageTemplate.html',
        controller: 'HomeController',
        pageLink: viewBase + 'member/home.html',
        title: 'Home'
      })
      .when('/admin', {
        templateUrl: viewBase + 'templates/pageTemplate.html',
        controller: 'AdminController',
        pageLink: viewBase + 'member/admin.html',
        title: 'Admin'
      });
  }
]);

care.run([function () { }]);
