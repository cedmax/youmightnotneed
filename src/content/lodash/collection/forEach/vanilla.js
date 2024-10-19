['a', 'b', 'c'].forEach((item, index) => {
  console.log(item, index)
})
// => a 0
// => b 1
// => c 2

Object.entries({ a: 'red', b: 'green' }).forEach(([key, item]) => {
  console.log(item, key)
})
// => red a
// => green b