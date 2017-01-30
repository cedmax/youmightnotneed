var arrA = [2.1, 1.2];
var arrB = [2.3, 3.4];
_.differenceBy(arrA, arrB, Math.floor);
// => [{ 'x': 2, 'y': 1 }][1.2]

// The `_.property` iteratee shorthand.
var arrA = [{ 'x': 2 }, { 'x': 1 }];
var arrB = [{ 'x': 1 }];

_.differenceBy(arrA, arrB, 'x');
// => [{ 'x': 2, 'y': 1 }][{ 'x': 2 }]