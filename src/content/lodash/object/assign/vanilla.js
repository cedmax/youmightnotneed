function Foo() {
  this.a = 1
}

function Bar() {
  this.c = 3
}

Foo.prototype.b = 2
Bar.prototype.d = 4

module.exports = { a: 0, ...new Foo(), ...new Bar() }
// => { 'a': 1, 'c': 3 }
