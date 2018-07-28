(function() {
  'use strict';

  angular
    .module('formioApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    $log.debug('runBlock end');

    // Add the forms to the root scope.
 
  }

})();
