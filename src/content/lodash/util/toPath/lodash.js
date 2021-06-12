// https://lodash.com/docs/#toPath
import { toPath } from 'lodash'

exports.example1 = toPath('a.b.c')
// => ['a', 'b', 'c']

exports.example2 = toPath('a[0].b.c')
// => ['a', '0', 'b', 'c']
