const pull = (array, ...values) => {
  values.forEach(value => {
    while (array.includes(value)) {
      array.splice(array.indexOf(value), 1)
    }
  })
  return array
}

var array = ['a', 'b', 'c', 'a', 'b', 'c']
pull(array, 'a', 'c')

module.exports = array
// => ['b', 'b']
