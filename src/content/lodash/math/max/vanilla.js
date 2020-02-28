const max = nums => {
  if (nums.length) return Math.max(...nums)
}

exports.max = max([4, 2, 8, 6])
// => 8

exports.undefined = max([])
// => undefined
