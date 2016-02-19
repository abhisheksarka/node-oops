var util = require('./util');

exports.inherits = function (Child, Parent) {
  util.inheritStaticMethods(Child, Parent);
  util.inheritInstanceMethods(Child, Parent);
}
