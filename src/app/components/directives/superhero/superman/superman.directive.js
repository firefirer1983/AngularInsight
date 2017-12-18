/**
 * Created by Administrator on 2017/12/18.
 */
(function () {
  angular
    .module('angularInsight')
    .directive('superMan', superMan);

  function superMan() {
    let directive = {
      strict: 'AE',
      template: '<div>Here i am to save the day</div>'
    };
    return directive;
  }
})();
