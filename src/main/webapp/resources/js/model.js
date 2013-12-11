var Jar = function(name, version){
  this.name = name;
  this.version = version;
  this.classes = [];
}
Jar.prototype.addClass = function(clz){
  clz.jar = this;
  this.classes.push(clz);
}
var Class = function(name, package){
  this.package = {name: package == undefined? "": package};
  this.name = name;
  this.methods = [];
  this.fields = [];
}
Class.prototype.qualifiedName = function(){
  if(this.package.name == ""){
    return this.name;
  }
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
  this.arguments = arguments || [];
};
Method.prototype.getTitle = function(){
  var methodName = this.arguments.length == 0? this.name + "()": this.name + "(" + this.arguments.join(", ") + ")";
  var array = [this.accessType, this.modifiers.join(" "), this.returnType, methodName];
  return array.filter(function (ele) {return ele != ""}).join(" ");
}
var Field = function(accessType, modifiers, name, returnType){
  this.accessType = accessType;
  this.modifiers = modifiers;
  this.name = name;
  this.returnType = returnType;
};
Field.prototype.getTitle = function(){
  return [this.accessType, this.modifiers.join(" "), this.returnType, this.name].filter(function (ele) {return ele != ""}).join(" ");
}
