// regex explained: https://regexr.com/4v6j7
const trimStart = (str, c = '\\s') => str.replace(new RegExp(`^([${c}]*)(.*)$`), '$2')

exports.simple = trimStart(' abc ')
// => 'abc '

exports.custom = trimStart('-_-abc-_-', '_-')
// => 'abc-_-'
