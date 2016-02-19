# oo-patterns

Object Oriented Patterns is a simple lightweight node module that eases JavaScript based inheritance of classes. It is inspired by ruby methodologies.

# Usage

## Basic Inheritance (static methods and instance methods)

``` JavaScript
var oo = require('oo-patterns');

// This is the parent class
function Base () { }
Base.find (id) {
  // static method
  console.log('Finding user...');
}
Base.prototype.update = function () {
  // instance method
  console.log('Updating user...');
}


// This is the child class
function User () { }
oo.inherits(User, Base);

var user = new User();
user.update(); // Updating user...
User.find(1); // Finding user...
```

## Module Based Inheritance, Mixins (instance methods)

``` JavaScript
// declare classes that are intended to behave as modules
function Confirmable () { };
Confirmable.prototype.confirm = function () {
  console.log('Confirming...');
}
function Authenticatable () { };
Authenticatable.prototype.authenticate = function () {
  console.log('Authenticating...');
}

oo.includes(User, Authenticatable, Confirmable);

user.confirm() // Confirming...
user.authenticate() //Authenticating...
```
