const isExists = (y, m, d) => {
  const date = new Date(y, m, d)

  return (
    date.getDate() === d && date.getMonth() === m && date.getFullYear() === y
  )
}

// For the valid date:
exports.valid = isExists(2018, 0, 31)
// => true

// For the invalid date:
exports.invalid = isExists(2018, 1, 31)
// => false
