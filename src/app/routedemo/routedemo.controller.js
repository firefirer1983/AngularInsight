(function() {
  'use strict';

  angular
    .module('angularInsight')
    .controller('RouteDemoController', RouteDemoController);

  function RouteDemoController($q, $route) {
    var vm = this;
    var defer = $q.defer();
    console.log($route.current.locals.app);
    defer.promise.then(function (weapon) {
      alert("You get my " + weapon);
      return "car";
    }).then(function (weapon) {
      alert("You get my " + weapon);
      return "bow";
    }).then(function (weapon) {
      alert("You get my " + weapon);
      return "axe";
    }).then(function (weapon) {
      alert("You get my " + weapon);
      return "ship";
    });

    defer.resolve("gun");
  }
})();
