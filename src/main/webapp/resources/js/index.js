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

var Method = function(accessType, modifiers, name, returnType, arguments){
  this.accessType = accessType;
  this.modifiers = modifiers;
  this.name = name;
  this.returnType = returnType;
  this.arguments = arguments;
};
Method.prototype.getTitle = function(){
  return [this.accessType, this.modifiers.join(" "), this.returnType, this.name, "(", this.arguments.join(" "), ")"].join(" ");
}
var Field = function(accessType, modifiers, name, returnType){
  this.accessType = accessType;
  this.modifiers = modifiers;
  this.name = name;
  this.returnType = returnType;
};
Field.prototype.getTitle = function(){
  return [this.accessType, this.modifiers.join(" "), this.returnType, this.name].join(" ");
}

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
       new Method('public', ['static', 'final'], "trim", "String", ["String", "int"]),
       new Method('private', ['static'], "trimToEmpty", "String", []),
       new Method('protected', ['final'], "abbreviate", "String", ["Pattern"]),
       new Method('public', [], "length", "int", [])
     ],
     fields: [
       new Field('public', ['static', 'final'], "EMPTY", "String"),
       new Field('private', [], "INDEX_NOT_FOUND", "int")
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