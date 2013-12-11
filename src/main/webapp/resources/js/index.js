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

var Jar = function(name, version){
  this.name = name;
  this.version = version;
  this.packages = [];
}
Jar.prototype.addPackage = function(package){
  package.jar = this;
  this.packages.push(package);
}
var Package = function(name){
  this.name = name;
  this.classes = [];
}
Package.prototype.addClass = function(clz){
  clz.package = this;
  this.classes.push(clz);
}
var Class = function(name){
  this.name = name;
  this.methods = [];
  this.fields = [];
}
Class.prototype.qualifiedName = function(){
  return this.package.name + "." + this.name;
}
Class.prototype.addMethod = function(method){
  this.methods.push(method);
}
Class.prototype.addField = function(field){
  this.fields.push(field);
}
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
  var jar = new Jar("commons-lang3", "3.0");
  var package = new Package("org.apache.commons");
  var clz = new Class("StringUtils");
  clz.addMethod(new Method('public', ['static', 'final'], "trim", "String", ["String", "int"]));
  clz.addMethod(new Method('private', ['static'], "trimToEmpty", "String", []));
  clz.addMethod(new Method('protected', ['final'], "abbreviate", "String", ["Pattern"]));
  clz.addMethod(new Method('public', [], "length", "int", []));
  clz.addField(new Field('public', ['static', 'final'], "EMPTY", "String"));
  clz.addField(new Field('private', [], "INDEX_NOT_FOUND", "int"));
  package.addClass(clz);
  jar.addPackage(package);

  console.log(jar);
  console.log(package);
  console.log(clz);
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