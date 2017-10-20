
exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "property"; ALTER SEQUENCE property_id_seq RESTART WITH 3;')

    .then(function () {
        var properties = [{
          id:1,
          address: '6181 NW 57th St.',
          unit: 206,
          zipcode: 33319,
          rent: 1250,
          img:'',
          landlord_id: 1
        },{
          id: 2,
          address: '1416 Hollywood Blvd.',
          unit: '',
          zipcode: 33020,
          rent: 1450,
          img: '',
          landlord_id: 1
        }]
        return knex('property').insert(properties)
    });
};
