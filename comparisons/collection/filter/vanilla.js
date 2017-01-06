function isBigEnough(value) {
  return value >= 10
}

var array = [12, 5, 8, 130, 44]
array.filter(isBigEnough)
//[12, 130, 44]