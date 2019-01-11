const min = nums => (nums.length ? Math.min(...nums) : undefined)

exports.min = min([4, 2, 8, 6])
// => 8

exports.undefined = min([])
// => undefined
