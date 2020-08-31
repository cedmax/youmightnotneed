const min = nums => {
  if (nums.length) return Math.min(...nums)
}

exports.min = min([4, 2, 8, 6])
// => 2

exports.undefined = min([])
// => undefined
