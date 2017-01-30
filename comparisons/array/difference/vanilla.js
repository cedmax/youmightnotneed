var a = [2, 1];
var b = [3, 2];

[...a].filter(x => !b.includes(x));
// => [1]
