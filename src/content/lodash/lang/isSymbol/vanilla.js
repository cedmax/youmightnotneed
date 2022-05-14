const isSymbol = symbolMaybe => typeof symbolMaybe === 'symbol'

exports.symbolValue = isSymbol(Symbol.iterator)
// => true

exports.notSymbolValue = isSymbol('abc')
// => false
