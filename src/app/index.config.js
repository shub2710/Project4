(function() {
  'use strict';

  angular
    .module('formioApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider,$momentProvider) {
    $locationProvider.hashPrefix('');
    $momentProvider
    .asyncLoading(false)
    .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
    $logProvider.debugEnabled(true);
  }
})();
