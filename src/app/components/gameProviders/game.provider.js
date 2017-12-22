angular
  .module("angularInsight")
  .provider("game", function () {

    var type = "Shit";
    return {
      setType: function (val) {
        type = val;
      },
      $get: function () {
        return {
          title: type + "Craft"
        }
      }
    }
  });
