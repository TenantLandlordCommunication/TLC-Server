const knex = require('./knex');


module.exports = {

  getLandlord:function() {
    return knex('landlord')
  },

  getTenants:function(){
    return knex('tenant');
  },

  getProperty:function(){
    return knex('property');
  },

  getOne:function(id){
    return knex('property').where('id',id)
  },

  getlandlordOne: function(id){
    return knex('landlord').where('id',id)
  }

  // create: function(property){
  //   return knex('property').insert(property).returning('*');
  // },




}
