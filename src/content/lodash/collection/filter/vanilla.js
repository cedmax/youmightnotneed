function isBigEnough (value) {
  return value >= 10
}

[12, 5, 8, 130, 44].filter(isBigEnough)
// => [12, 130, 44]
