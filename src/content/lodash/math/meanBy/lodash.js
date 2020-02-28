// https://lodash.com/docs/#meanBy
import { meanBy } from 'lodash'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

module.exports = meanBy(objects, o => o.n)
// => 5
