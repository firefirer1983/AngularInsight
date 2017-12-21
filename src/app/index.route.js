(function() {
  'use strict';

  angular
    .module('angularInsight')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/routedemo', {
        templateUrl: 'app/routedemo/routedemo.html',
        controller: 'RouteDemoController',
        controllerAs: 'routedemo',
        resolve: {
          app: function ($q, $timeout) {
            var defer = $q.defer();
            defer.promise.then(function (msg) {
              alert("promise resolve, msg: " + msg);
            });
            $timeout(function () {
              defer.resolve("time out is here");
            }, 2000);
            return defer.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
