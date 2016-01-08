var pgSchedule = angular.module('helpdeskLogout');

pgSchedule.controller('mainController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

  $scope.leaderboard = [];
  $scope.submitted = false
  $scope.getLeaderboard = function() {
    $http.get('api/leaderboard').success(function(data) {
      $scope.leaderboard = data;
    });
  };

  $scope.addPerson = function() {
    $scope.submitted = true;
    $http.post('api/add', { name: $scope.name, victim: $scope.victim }).success(function(data) {
      $scope.name = ''
      $scope.victim = ''
      $scope.leaderboard = data;
    }).error(function(data) {
      $scope.submitted = false
      console.log('An error occurred.');
    });
  }

  $scope.getLeaderboard();

  $interval($scope.getLeaderboard, 1000 * 10);


}]);
