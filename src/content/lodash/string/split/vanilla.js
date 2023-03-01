exports.all = 'a-b-c'.split('-')
// => ['a', 'b', 'c']

exports.justTwo = 'a-b-c'.split('-').slice(0, 2)
// => ['a', 'b']

// When the split is used with the empty separator, `String#split` and `_.split`
// will have the different behavior:
//
// `_.split` with empty string as a separator takes user-perceived characters
// (grapheme clusters) and unicode characters (codepoints) into account;
//
// `String#split` with empty string as a separator does not take them into
// account and will return string split by UTF-16 codeunits, which will destroy
// the surrogate pairs.
//
// To avoid this issue, `Intl.Segmenter` API could be used
exports.graphemes = Array.from(new Intl.Segmenter().segment('foo👨‍👨‍👧‍👦')).map(
  ({ segment }) => segment
)
// => ['f', 'o', 'o', '👨‍👨‍👧‍👦']
