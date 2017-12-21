(function () {
  angular
    .module('angularInsight')
    .directive('kid', kid);

  function kid() {
    var directive = {
      strict: 'E',
      template: '<input ng-model="inputmsg"><button ng-click="done({value:inputmsg})")></button>',
      scope: {
        done: '&'
      }
    };
    return directive;
  }
  angular
    .module('angularInsight')
    .controller('scopeDemoController', scopeDemoController);

  function scopeDemoController() {
    var vm = this;
    vm.onChore = function (msg) {
      alert("i have " + msg);
    }
  }

  angular
    .module('angularInsight')
    .directive('zippy', zippy);
  function zippy() {
    var directive = {
      restrict: 'E',
      template: '<div>' +
                    '<h3 ng-click="toggleContent()">{{title}}</h3>'+
                    '<div ng-show="showContent" ng-transclude></div>' +
                '</div>',
      transclude: true,
      scope: {
        title: '@'
      },
      link: linkFunc
    };
    function linkFunc(scope) {
      scope.showContent = false;
      scope.toggleContent = function () {
        scope.showContent = !scope.showContent;
      }
    }
    return directive;
  }
})();
