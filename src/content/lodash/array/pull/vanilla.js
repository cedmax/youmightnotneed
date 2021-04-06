function pull(array, ...items) {
  let index = 0

  while(index !== array.length) {
    if(items.includes(array[index])) {
      array.splice(index, 1)
    } else {
      index += 1
    }
  }
  return array
}

module.exports = pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')
// => ['b', 'b']