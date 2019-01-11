const max = nums => (nums.length ? Math.max(...nums) : undefined)

exports.max = max([4, 2, 8, 6])
// => 8

exports.undefined = max([])
// => undefined
