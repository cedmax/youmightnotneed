const words = str => {
  const segmenter = new Intl.Segmenter('en', { granularity: 'word' })
  return Array.from(segmenter.segment(str))
    .filter(({ isWordLike }) => isWordLike)
    .map(({ segment }) => segment)
}

exports.enumeration = words('fred, barney, & pebbles')
// => ['fred', 'barney', 'pebbles']
