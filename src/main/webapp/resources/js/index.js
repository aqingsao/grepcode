angular.module('grepcode', ['ngRoute', 'firebase'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'IndexCtrl',
        templateUrl:'index.html'
      })
      .when('/list', {
        controller:'ListCtrl',
        templateUrl:'list.html'
      })
      .when('/view', {
        controller:'ViewCtrl',
        templateUrl:'detail.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  })
  .controller('IndexCtrl', function($scope){
    $scope.search = function(){
      console.log("you are searching...");
    }
  });