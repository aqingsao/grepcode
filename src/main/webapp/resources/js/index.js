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
  var jar = new Jar("commons-lang3", "3.0");
  var clz = new Class("StringUtils", "org.apache.commons");
  clz.addMethod(new Method('public', ['static', 'final'], "trim", "String", ["String", "int"]));
  clz.addMethod(new Method('private', ['static'], "trimToEmpty", "String", []));
  clz.addMethod(new Method('protected', ['final'], "abbreviate", "String", ["Pattern"]));
  clz.addMethod(new Method('public', [], "length", "int", []));
  clz.addField(new Field('public', ['static', 'final'], "EMPTY", "String"));
  clz.addField(new Field('private', [], "INDEX_NOT_FOUND", "int"));
  jar.addClass(clz);

  $scope.source = clz;

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