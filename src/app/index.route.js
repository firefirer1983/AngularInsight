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
          loadData: RouteErrController.loadData
        }
      })
      .when('/game', {
        templateUrl: 'app/components/gameProviders/game.html',
        controller: 'GameController',
        controllerAs: 'gameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }


  var RouteErrController = angular
    .module('angularInsight')
    .controller('RouteErrController', function () {
      // $log.log("RouteErrController create!");
      // var deregisterationCallback = $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
      //   alert(rejection);
      // });
      // $rootScope.$on("$destroy", function () {
      //   deregisterationCallback();
      // })
    });


  RouteErrController.loadData = function ($q, $timeout, $log) {
    var defer = $q.defer();
    defer.promise.then(function (msg) {
      alert("promise resolve, msg: " + msg);
    });
    $timeout(function () {
      $log.log("Network is down!");
      defer.reject("Network is down!");
    }, 2000);
    return defer.promise;
  };
})();
