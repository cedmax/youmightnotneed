// https://lodash.com/docs/#pull
import { pull } from 'lodash'

module.exports = pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c');
// => ['b', 'b']