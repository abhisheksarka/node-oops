var assert = require('assert'),
    Oop = require('../index');

// This behaves as the parent class
function Base () {
  this.baseNumber = 1000;
};
Base.commonVar = 1200;

Base.create = function () {
  return 'create';
};
Base.prototype.update = function () {
  return 'update';
};

// These behave as modules
function Confirmable () { };
Confirmable.prototype.confirm = function () {
  return 'confirm';
}

function Authenticatable () { };
Authenticatable.prototype.authenticate = function () {
  return 'authenticate';
}

// This behaves as the child class
function User () {
  this.name = 'foo';
};
Oop.inherits(User, Base);
Oop.includes(User, Authenticatable, Confirmable);

describe('Oop', function() {
  describe('#inherits(Child, Parent)', function () {
    it('inherit\'s a parent\'s static methods and variables', function () {
      assert.equal('create', User.create());
      assert.equal(1200, User.commonVar);
    });
    it('inherit\'s a parent\'s instance methods', function () {
      var u1 = new User();
      assert.equal('update', u1.update());
    });
  });
  describe('#includes(Child, ...)', function () {
    it('includes\'s a class\'s instance methods only and allows multiple', function () {
      var u2 = new User();
      assert.equal('authenticate', u2.authenticate());
      assert.equal('update', u2.update());
      assert.equal('confirm', u2.confirm());
    });
  });
});
