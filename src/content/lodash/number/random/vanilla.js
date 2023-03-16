export const random = (lower = 0, upper = 0, floating) => {
  if (typeof upper === 'boolean') {
    floating = upper
    upper = 1
  }

  if (typeof floating === 'undefined') {
    floating = !Number.isInteger(lower) || !Number.isInteger(upper)
  }

  const randomNumber = Math.random() * (upper - lower) + lower
  return floating ? randomNumber : Math.round(randomNumber)
}

exports.integer05 = random(0, 5)
// => an integer between 0 and 5

exports.integer5 = random(5)
// => also an integer between 0 and 5

exports.floating5 = random(5, true)
// => a floating-point number between 0 and 5

exports.floating = random(1.2, 5.2)
// => a floating-point number between 1.2 and 5.2

exports.integer = random()
// => 0 or 1
