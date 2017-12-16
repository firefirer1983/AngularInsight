(function() {
  'use strict';

  angular
    .module('angularInsight')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
