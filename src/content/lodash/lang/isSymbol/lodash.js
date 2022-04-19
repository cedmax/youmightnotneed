// https://lodash.com/docs/#isSymbol
import { isSymbol } from 'lodash'

exports.symbolValue = isSymbol(Symbol.iterator)
// => true

exports.notSymbolValue = isSymbol('abc')
// => false
