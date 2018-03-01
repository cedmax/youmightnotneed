function iteratee (item, index) {
  console.log(item, index)
}

['a', 'b', 'c'].forEach(iteratee)
// => a 0
// => b 1
// => c 2
