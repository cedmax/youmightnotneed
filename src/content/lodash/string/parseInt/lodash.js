// https://lodash.com/docs/#parseInt
import { parseInt } from 'lodash'

exports.simple = parseInt('08')
// => 8

exports.map = ['6', '08', '10'].map(parseInt)
// => [6, 8, 10]
