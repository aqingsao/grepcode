var app = angular.module('grepcode', []);
//app.config(function($routeProvider) {
//    $routeProvider
//      .when('/index.html', {
//        controller:'SearchCtrl',
//        templateUrl:'index.html'
//      })
//      .when('/list', {
//        controller:'ListCtrl',
//        templateUrl:'list.html'
//      })
//      .when('/view', {
//        controller:'ViewCtrl',
//        templateUrl:'detail.html'
//      })
//      .otherwise({
//        redirectTo:'/'
//      });
//  })
app.controller('SearchCtrl', function($scope){
  $scope.search = function(){
    console.log("you are searching...");
  }
  $scope.sayHi = function(){
    console.log("hi");
  }
});