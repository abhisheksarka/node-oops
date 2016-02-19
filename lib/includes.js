var util = require('./util');
exports.includes = function (Child /* Any number of parent classes can be passed here */) {
  for (var i in arguments) {
    if (i != 0) {
      util.inheritInstanceMethods(Child, arguments[i]);
    }
  }
}
