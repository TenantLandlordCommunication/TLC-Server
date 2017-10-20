exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "tenant"; ALTER SEQUENCE tenant_id_seq RESTART WITH 3;')

    .then(function () {
        var tenants = [{
          id: 1,
          name: 'Michael Cobb',
          email: 'MCobb@gmail.com',
          number: '9543238899',
          rentdue: 1250,
          property_id:1
        }, {
          id: 2,
          name: 'Alexandra Roadfuss',
          email: 'ARoadfuss@gmail.com',
          number: '9546882346',
          rentdue: 1450,
          property_id: 2
        }];

        return knex('tenant').insert(tenants)
    });
};
