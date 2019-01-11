import { sumBy } from 'lodash'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

exports.function = sumBy(objects, o => o.n)
// => 20

exports.shortHand = sumBy(objects, 'n')
// => 20
