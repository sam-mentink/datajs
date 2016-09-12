exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('candy').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('candy').insert({
          id: 1,
          name: 'twix',
          deliciousness: 'mega yummy',
          size: 'massive',
          amount: 2000
        }),
        knex('candy').insert({
          id: 2,
          name: 'kit kat',
          deliciousness: 'mega yummy',
          size: 'massive',
          amount: 3000
        }),
        knex('candy').insert({
          id: 3,
          name: 'hersheys',
          deliciousness: 'super yummy',
          size: 'massive',
          amount: 4000
        })
      ]);
    });
};
