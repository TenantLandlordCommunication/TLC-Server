const knex = require('./knex');


module.exports = {

  getLandlord:function() {
    return knex('landlord')
  },

  getProperty:function(){
    return knex('property');
  },

  getOne:function(id){
    return knex('property').where('id',id)
  },

  // create: function(property){
  //   return knex('property').insert(property).returning('*');
  // },

  getTenants:function(){
    return knex('tenant');
  }


}
