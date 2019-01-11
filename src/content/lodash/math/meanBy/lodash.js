import { meanBy } from 'lodash'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

exports.function = meanBy(objects, o => o.n)
// => 5

exports.shortHand = meanBy(objects, 'n')
// => 5
