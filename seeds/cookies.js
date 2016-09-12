exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cookies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cookies').insert({
          id: 1,
          name: 'cookie monster',
          type: 'chocloate chip',
          amount: 3000
        }),
        knex('cookies').insert({
          id: 2,
          name: 'grover',
          type: 'Ginger crunch',
          amount: 2000
        }),
        knex('cookies').insert({
          id: 3,
          name: 'Fuzzy',
          type: 'Honey mustard',
          amount: 1000
        }),
      ]);
    });
};
