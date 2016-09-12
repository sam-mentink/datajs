exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cupcakes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cupcakes').insert({
          id: 1,
          name: 'blueberry',
          ingredients: 'flouretc',
          cost_price: 2.50
        }),
        knex('cupcakes').insert({
          id: 2,
          name: 'red velvet',
          ingredients: 'flouretc',
          cost_price: 2.95
        }),
        knex('cupcakes').insert({
          id: 3,
          name: 'chocolate',
          ingredients: 'flouretc',
          cost_price: 3.50
        }),
      ]);
    });
};
