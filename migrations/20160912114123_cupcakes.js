exports.up = function (knex, Promise) {
  return knex.schema.createTable('cupcakes', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('ingredients')
    table.integer('cost_price')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cupcakes')
};
