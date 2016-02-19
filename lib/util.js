var extend = require('extend');

function inheritInstanceMethods (Child, Parent) {
  var cpro = Child.prototype,
      ppro = Parent.prototype;

  // For instance methods
  for (var i in ppro) {
    if (!cpro[i]) {
      cpro[i] = ppro[i]
    }
  };

  // set the constructor to the child class
  Child.prototype.constructor = Child;
};

function inheritStaticMethods (Child, Parent) {
  extend(true, Child, Parent);
};

exports.inheritInstanceMethods = inheritInstanceMethods;
exports.inheritStaticMethods = inheritStaticMethods;
