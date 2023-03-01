exports.all = 'a-b-c'.split('-')
// => ['a', 'b', 'c']

exports.justTwo = 'a-b-c'.split('-').slice(0, 2)
// => ['a', 'b']

// When the split is used with the empty separator, `String#split` and `_.split`
// will have the different behavior:
//
// _.split takes user-perceived characters (grapheme clusters) and unicode
// characters (codepoints) into account;
//
// `String#split` does not take them into account and will return string split
// by UTF-16 codeunits, which will destroy the surrogate pairs.
//
// In order to avoid this problem, `Intl.Segmenter` API could be used
exports.graphemes = [...new Intl.Segmenter().segment('foo👨‍👨‍👧‍👦')].map(
  ({ segment }) => segment
)
// => ['f', 'o', 'o', '👨‍👨‍👧‍👦']
