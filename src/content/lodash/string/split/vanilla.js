exports.all = 'a-b-c'.split('-')
// => ['a', 'b', 'c']

exports.justTwo = 'a-b-c'.split('-').slice(0, 2)
// => ['a', 'b']

exports.graphemes = [...new Intl.Segmenter().segment('foo👨‍👨‍👧‍👦')].map(
  ({ segment }) => segment
)
// => ['f', 'o', 'o', '👨‍👨‍👧‍👦']
