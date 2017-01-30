var arrA = [2.1, 1.2];
var arrB = [2.3, 3.4];

[...arrA].filter(a => !arrB.map(Math.floor).includes(Math.floor(a)));
// => [1.2]

// The `_.property` iteratee shorthand.
var arrA = [{ 'x': 2 }, { 'x': 1 }];
var arrB = [{ 'x': 1 }];

[...arrA].filter(a => !arrB.map(b => b.x).includes(a.x));
// => [{ 'x': 2 }]
