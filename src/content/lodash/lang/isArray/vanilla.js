exports.array = Array.isArray([1, 2, 3])
// => true

exports.dom_body_children = Array.isArray(document.body.children)
// => false

exports.string = Array.isArray('abc')
// => false
