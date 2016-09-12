var development = require('./knexfile').development
var knex = require('knex')(development)

/////////////////////////
//111111111111111
////////////////////////
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

/////////////////////////
//222222222222
////////////////////////

// knex.update({
//   id: 2,
//   name: 'kit kat',
//   size: 'massive'
// })
//
// knex('candy')
//   .where('id', '<', 4)
//   .where('id', '>', 2)
//   .update({
//     size: 'super massiff',
//     amount: 9000
//   })
//   .then(getName)
//   .then(showName)
//
// function getName(candy) {
//   for (var i = 0; i < candy.length; i++) {
//     console.log(candy[i].size)
//   }
//   return knex('candy').select('candy.size')
// }
//
// function showName(size) {
//   console.log(size)
// }

/////////////////////////
//33333333333
////////////////////////

knex.del({
  id: 3
})

knex('candy')
  .where('id', '>', 16)
  .del()
  .then(getName)
  .then(showName)

function getName(candy) {
  for (var i = 0; i < candy.length; i++) {
    console.log(candy[i].id)
  }
  return knex('candy').select('candy.id')
}

function showName(id) {
  console.log(id)
}

/////////////////////////
//44444444444
////////////////////////
