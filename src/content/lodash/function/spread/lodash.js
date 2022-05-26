// https://lodash.com/docs/#spread
import { spread } from 'lodash'

const say = spread(function (who, what) {
  return who + ' says ' + what
})

exports.basic = say(['fred', 'hello'])
// => 'fred says hello'

const numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)])

exports.promise = numbers.then(
  spread(function (x, y) {
    return x + y
  })
)
// => a Promise of 76
