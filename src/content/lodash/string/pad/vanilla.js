const pad = (str, pad, custom) => {
  const prePad = Math.floor((pad - str.length) / 2) + str.length
  return str.padStart(prePad, custom).padEnd(pad, custom)
}

exports.defaultPadding = pad('abc', 8)
// // => '  abc   '
//
exports.customPadding = pad('abc', 8, '_-')
// // => '_-abc_-_'
//
exports.noExtraPadding = pad('abc', 3)
// // => 'abc'
