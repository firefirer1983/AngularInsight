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
})();
