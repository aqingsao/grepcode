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

app.controller("DetailCtrl", function($scope){
   $scope.source = {
     jar: {
       name: "commons-lang3",
       version: "3.0"
     },
     class: {
       package: "org.apache.commons",
       name: "StringUtils",
       qualifiedName: function(){
         return this.package + "." + this.name;
       }
     },
     methods: [
       {accessType: 'public', modifiers: ['static', 'final']},
       {accessType: 'private', modifiers: []}
     ]
   },
   $scope.paddingLeft = function(modifiersCount){
     if(modifiersCount == 0){
       return "29";
     }
     if(modifiersCount == 1){
       return "16";
     }
     return "3";
   }
});