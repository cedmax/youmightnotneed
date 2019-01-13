const clamp = (num, clamp, higher) =>
  higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp)

exports.noOptionalArg = clamp(-10, -5)
// => -10

exports.lower = clamp(-10, -5, 5)
// => -5

exports.higher = clamp(10, -5, 5)
// => 5
