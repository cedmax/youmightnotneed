function isBigEnough(value) {
  return value >= 10
}
var array = [12, 5, 8, 130, 44]
_.filter(array, isBigEnough)
//[12, 130, 44]
