// https://lodash.com/docs/#replace
const replace = (str, s, r) => str.replace(s, r)

module.exports = replace('Hi Fred', 'Fred', 'Barney')
// => 'Hi Barney'
