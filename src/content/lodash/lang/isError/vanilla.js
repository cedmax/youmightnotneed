const isError = err => err instanceof Error

exports.error = isError(new Error())
// => true

exports.notError = isError(Error)
// => false
