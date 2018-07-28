(function() {
  'use strict';

  angular
    .module('formioApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $injector) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
 
      })
      .state('Events', {
        url: '/Events',
        templateUrl: 'app/Events/events.html',
        controller: 'EventsController',
 
      });


    $urlRouterProvider.otherwise('/home');
  }

})();
