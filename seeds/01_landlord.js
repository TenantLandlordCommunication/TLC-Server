exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "landlord"; ALTER SEQUENCE landlord_id_seq RESTART WITH 1;')

    .then(function(){
      var landlords = [{
        id:1,
        name: 'Logan Crewss',
        email: 'LCrewss@ymail.com'
      }]

      return knex('landlord').insert(landlords)
    })






}
