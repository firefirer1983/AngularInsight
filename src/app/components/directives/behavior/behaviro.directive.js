/**
 * Created by Administrator on 2017/12/18.
 */
(function () {
  angular
    .module('angularInsight')
    .directive('enter', enterAct);

  function enterAct() {
    return function (scope, elem, attrs) {
      elem.bind("mouseenter", function () {
        scope.$apply(attrs.enter);
      });
      elem.bind("mouseleave", function () {
        elem.removeClass(attrs.enter);
      })
    }
  }

  angular
    .module('angularInsight')
    .directive('errbanner', errbanner);

  function errbanner($rootScope, $log) {
    return {
      restrict: "E",
      scope:{},
      template: '<div ng-show="hasError" class="alert-box alert">{{rejection}}</div>',
      link: function (scope) {
        $log.log("errbanner create!");
        var deregisterationCallback = $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
          scope.hasError = true;
          scope.rejection = rejection;
        });
        $rootScope.$on("$destroy", function () {
          deregisterationCallback();
        });
      }
    }
  }
})();
