// https://lodash.com/docs/#lowerFirst
import { lowerFirst } from 'lodash'

exports.normal = lowerFirst('Fred')
// => 'fred'

exports.allCaps = lowerFirst('FRED')
// => 'fRED'
