// require('jest-mock-now')()
const { advanceTo } = require('jest-date-mock')

advanceTo(new Date(2014, 8, 25, 18, 30, 15, 500).getTime())
