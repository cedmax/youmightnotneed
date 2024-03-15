const eachDayOfInterval = ({ start, end }, { step } = { step: 1 }) => {
  const retArr = []
  start.setHours(0, 0, 0, 0)
  end.setHours(0, 0, 0, 0)

  do {
    retArr.push(new Date(start.getTime()))
    start.setDate(start.getDate() + step)
  } while (start.getTime() <= end.getTime())

  return retArr
}

exports.default = eachDayOfInterval({
  start: new Date(2014, 9, 6),
  end: new Date(2014, 9, 10),
})

//=> [
//   Mon Oct 06 2014 00:00:00,
//   Tue Oct 07 2014 00:00:00,
//   Wed Oct 08 2014 00:00:00,
//   Thu Oct 09 2014 00:00:00,
//   Fri Oct 10 2014 00:00:00
// ]

exports.stepped = eachDayOfInterval(
  {
    start: new Date(2014, 9, 6),
    end: new Date(2014, 9, 10),
  },
  { step: 3 }
)
//=> [
//   Wed Oct 06 2014 00:00:00,
//   Mon Oct 08 2014 00:00:00,
// ]
