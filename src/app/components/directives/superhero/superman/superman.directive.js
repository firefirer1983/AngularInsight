/**
 * Created by Administrator on 2017/12/18.
 */
(function () {
  angular
    .module('angularInsight')
    .directive('superMan', superMan);

  function superMan() {
    var directive = {
      strict: 'E',
      transclude: true,
      template: '<div>Here i am to save the day! <p ng-transclude></p></div>'
    };
    return directive;
  }


  angular
    .module('angularInsight')
    .directive('superHero', superHero);

  function superHero() {
    var directive = {
      strict: 'E',
      link: linkFunc,
      scope: {},
      controller: superPowerInjectCtrl
    };


    function linkFunc(scope, elem) {
      elem.bind('mouseenter', function () {
        var all_power = "";
        scope.super_power.forEach(function (power) {
          all_power += " ";
          all_power += power;
        });
        elem.html("I can "+ all_power);
      });

    }

    function superPowerInjectCtrl($scope) {
      $scope.super_power = [];
      this.addStrength = function () {
        $scope.super_power.push("strength");
      };
      this.addFlight = function () {
        $scope.super_power.push("flight");
      };
      this.addSpeed = function () {
        $scope.super_power.push("speed");
      };
    }
    return directive;
  }
  angular
    .module('angularInsight')
    .directive('flight', flight);

  function flight() {
    var directive = {
      strict: 'A',
      require: 'superHero',
      link: linkFunc
    };

    function linkFunc(scope, elem, attrs, powerInjectCtrl) {
      powerInjectCtrl.addFlight();
      // console.log(scope.super_power);
    }
    return directive;
  }

  angular
    .module('angularInsight')
    .directive('speed', speed);
  function speed() {
    var directive = {
      strict: 'A',
      require: 'superHero',
      link: linkFunc
    };

    function linkFunc(scope, elem, attrs, powerInjectCtrl) {
      powerInjectCtrl.addSpeed();
      // console.log(scope.super_power);
    }
    return directive;
  }
  angular
    .module('angularInsight')
    .directive('strength', strength);
  function strength() {
    var directive = {
      strict: 'A',
      require: 'superHero',
      link: linkFunc
    };
    function linkFunc(scope, elem, attrs, powerInjectCtrl) {
      powerInjectCtrl.addStrength();
      // console.log(scope.super_power);
    }
    return directive;
  }
})();
