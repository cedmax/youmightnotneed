function Foo() {
  this.a = 1
  this.b = 2
}

Foo.prototype.c = 3

exports.instance = Object.keys(new Foo())
// => ['a', 'b'] (iteration order is not guaranteed)

exports.string = Object.keys('hi')
// => ['0', '1']
