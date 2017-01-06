function iteratee(item, index) {
  console.log(item, index)
}

var array = ["a", "b", "c"]
_.each(array, iteratee)
//a 0
//b 1
//c 2