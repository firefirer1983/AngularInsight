/**
 * Created by Administrator on 2017/12/18.
 */
(function () {
  angular
    .module('angularInsight')
    .directive('superMan', superMan);

  function superMan() {
    var directive = {
      strict: 'EA',
      template: '<div>Here i am to save the day!</div>'
    };
    return directive;
  }
  angular
    .module('angularInsight')
    .directive('flash', flash);

  function flash() {
    var directive = {
      strict: 'EA',
      link: linkFunc
    };
    function linkFunc() {
      alert("I am the justy!");
    }
    return directive;
  }
})();
