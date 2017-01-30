var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
]

_.find(users, function (o) { return o.age < 40; })
// => { user: "barney", age: 36, active: true }