function chunk(arr, n) {
  return arr.slice(0, (arr.length + n - 1)/n | 0)
          .map((c, i) => arr.slice(n * i, n * i + n));
}

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3);
// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]