const expected = {
  'default': [
    new Date(2014, 9, 6).toString(),
    new Date(2014, 9, 7).toString(),
    new Date(2014, 9, 8).toString(),
    new Date(2014, 9, 9).toString(),
    new Date(2014, 9, 10).toString(),
  ],
  'stepped': [new Date(2014, 9, 6).toString(), new Date(2014, 9, 9).toString()],
}

const datefns = require('./date-fns')
const plain = require('./vanilla')

test('eachDayOfInterval', () => {
  expect({
    default: datefns.default.map(a => a.toString()),
    stepped: datefns.stepped.map(a => a.toString()),
  }).toEqual(expected)
  expect({
    default: plain.default.map(a => a.toString()),
    stepped: plain.stepped.map(a => a.toString()),
  }).toEqual(expected)
})
