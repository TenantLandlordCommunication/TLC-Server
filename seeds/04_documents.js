
exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "documents"; ALTER SEQUENCE documents_id_seq RESTART WITH 2;')

    .then(function () {
        var documents = [{
          id:1,
          url: ""
        }]
        return knex('documents').insert(documents)
    });
};
