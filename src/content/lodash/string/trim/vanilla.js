// regex explained: https://regexr.com/4v6jg
const trim = (str, c = '\\s') => str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), '$2')

exports.simple = ' abc '.trim()
// => 'abc'

exports.custom = trim('-_-abc-_-', '_-')
// => 'abc'

exports.map = [' foo ', ' bar '].map(s => trim(s))
// => ['foo', 'bar']
