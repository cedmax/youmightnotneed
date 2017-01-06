var array = [1, 2, 3]
_.fill(array, 'a')

console.log(array)
//output: ['a', 'a', 'a']

_.fill(Array(3), 2)
//[2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3)
//[4, '*', '*', 10]