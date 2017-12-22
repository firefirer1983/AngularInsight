(function() {
  'use strict';

  angular
    .module('angularInsight')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, gameProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    gameProvider.setType("Fuck");
  }

})();
