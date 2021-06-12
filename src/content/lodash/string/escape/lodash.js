// https://lodash.com/docs/#escape
import { escape } from 'lodash'

module.exports = escape('fred, barney, & pebbles')
// => 'fred, barney, &amp; pebbles'
