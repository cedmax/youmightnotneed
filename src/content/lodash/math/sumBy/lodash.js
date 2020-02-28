// https://lodash.com/docs/#sumBy
import { sumBy } from 'lodash'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

module.exports = sumBy(objects, o => o.n)
// => 20
