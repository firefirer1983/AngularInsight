/**
 * Created by Administrator on 2017/12/18.
 */
(function () {
  angular
    .module('angularInsight')
    .directive('enter', enterAct);

  function enterAct() {
    return function (scope, elem) {
      elem.bind("mouseenter", function () {
        elem.addClass('panel');
      });
      elem.bind("mouseleave", function () {
        elem.removeClass('panel');
      })
    }
  }
})();
