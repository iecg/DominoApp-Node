angular.module('menu', [])

.controller('MenuCtrl', ['$scope', '$state', '$ionicPopup', 'Players', 'Game', function ($scope, $state, $ionicPopup, Players, Game) {
  $scope.savedGame = Game.savedGame();

  $scope.newGame = function () {
    if (Players.all().length >= 4) {
      $state.go('game');
    }
    else {
      $ionicPopup.alert({
        title: 'Add Players',
        template: '<p class="dark">Add at least 4 players before starting a new game</p>',
        buttons: [
          {
            text: 'OK',
            type: 'button-dark',
            onTap: function (e) {
              $state.go('players');
            }
          }
        ]
      });
    }
  };

  $scope.quickGame = function () {
    Game.save(Game.new());
    $state.go('game');
  };
}]);
