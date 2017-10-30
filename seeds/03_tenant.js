exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "tenant"; ALTER SEQUENCE tenant_id_seq RESTART WITH 5;')

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
        },
        {
          id: 3,
          name: 'Hadley Dexter',
          email: 'HDexter@aol.com',
          number: 8042145682,
          rentdue: 20000,
          property_id: 3
        },
        {
          id: 4,
          name: 'Colton Yorick',
          email: 'YorickC@gmail.com',
          number: 9048791453,
          rentdue: 1500,
          property_id: 4
        }];

        return knex('tenant').insert(tenants)
    });
};
