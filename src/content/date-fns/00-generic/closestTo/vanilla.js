const closestTo = (dateToCompare, datesArray) => {
  const distances = datesArray.map(date => Math.abs(date - dateToCompare))
  return datesArray[distances.indexOf(Math.min(...distances))]
}

// Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
const dateToCompare = new Date(2015, 8, 6)
module.exports = closestTo(dateToCompare, [
  new Date(2000, 0, 1),
  new Date(2030, 0, 1),
])
// => Tue Jan 01 2030 00:00:00
