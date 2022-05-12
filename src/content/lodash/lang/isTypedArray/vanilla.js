// Since Node.js v10+, it's available in the util library
// https://nodejs.org/api/util.html#utiltypesistypedarrayvalue
//
// This implementation is a simplified version of the one found
// in underscore.js (and it doesn't support IE some early Edge versions)

// the Regex tests on whether the Object.toString of the array passed matches any
// typed array. I.e.: [object Int32Array] or [object Float64Array]
const typedArrayPattern =
  /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/

const isTypedArray = value =>
  typedArrayPattern.test(Object.prototype.toString.call(value))

exports.uint8Array = isTypedArray(new Uint8Array())
// => true

exports.float64Array = isTypedArray(new Float64Array())
// => true

exports.arrayBuffer = isTypedArray(new ArrayBuffer())
// => false
