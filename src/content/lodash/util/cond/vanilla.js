const cond =
  pairs =>
  (...item) => {
    for (const [predicate, fn] of pairs) {
      if (predicate(...item)) {
        return fn(...item)
      }
    }
  }

var func = cond([
  [i => i.a === 1, () => 'matches A'],
  [i => i.b === Number(i.b), () => 'matches B'],
  [() => true, () => 'no match'],
])

exports.matchesA = func({ 'a': 1, 'b': 2 })
// => 'matches A'

exports.matchesB = func({ 'a': 0, 'b': 1 })
// => 'matches B'

exports.noMatch = func({ 'a': '1', 'b': '2' })
// => 'no match'

const multiArgCondition = cond([
  [(x, y) => x > y, (x, y) => x - y * 2],
  [() => true, (x, y) => y - x],
])

exports.fiveMinusZero = multiArgCondition(0, 5)
// => (y - x) === (5 - 0) === 5

exports.twoMinusOneByTwo = multiArgCondition(2, 1)
// => (x - y * 2) === (2 - 2) === 0

exports.twoMinusTwo = multiArgCondition(2, 2)
// => (y - x) === (2 - 2) === 0
