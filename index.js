var development = require('./knexfile').development
var knex = require('knex')(development)

// knex.insert([{
//     name: 'mars bar',
//     deliciousness: 'ultra yummy'
//   }, {
//     name: 'whittakers dark',
//     deliciousness: 'gobsmackingly good'
//   }])
//   .into('candy')
//   .then(getName)
//   .then(showName)
//   .catch(displayError)
//
// function getName(candy) {
//   for (var i = 0; i < candy.length; i++) {
//     console.log(candy[i].deliciousness)
//   }
//   return knex('candy').select('candy.deliciousness')
// }
//
// function showName(name) {
//   console.log(name)
// }
//
// function displayError(err) {
//   console.error(err)
// }

knex.update({
  id: 2,
  name: 'kit kat',
  size: 'massive'
})

knex('candy')
  .where('id',
    '>', 4)
  .update({
    size: 'not so massiff'
  })
  .then(getName)
  .then(showName)

function getName(candy) {
  for (var i = 0; i < candy.length; i++) {
    console.log(candy[i].size)
  }
  return knex('candy').select('candy.size')
}

function showName(size) {
  console.log(size)
}
