(function () {

  angular
    .module("angularInsight")
    .controller("GameController", function ($injector) {
      var vm = this;
      $injector.invoke(function (game) {
        vm.gameInfo = {title: game.title};
      });
    });

})();
