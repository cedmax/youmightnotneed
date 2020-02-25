// https://lodash.com/docs/#create
import { create } from 'lodash'

function Shape() {
  this.x = 0
  this.y = 0
}

function Circle() {
  Shape.call(this)
}

Circle.prototype = create(Shape.prototype, {
  constructor: Circle,
})

const circle = new Circle()
exports.circle = circle instanceof Circle
// => true

exports.shape = circle instanceof Shape
// => true
