import angular from 'angular';

(function() {

  var app=angular.module("githubViewer", []);
  var MainController = function($scope, $http) {
    var onUserComplete = function(response) {
      $scope.user = response.data;
    };
    var onError = function(reason) {
      $scope.eror = 'Could not fetch the user';
    };

    $http
      .get('https://api.github.com/users/recvenu1')
      .then(onUserComplete, onerror);

    $scope.message = 'Hello, Angular!';
  };
  app.controller ("MainController", ["$scope", "$http", MainController])
})();
