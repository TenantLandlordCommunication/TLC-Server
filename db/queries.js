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

  getOneTenant:function(id){
    return knex('tenant').where('id',id)
  },

  getlandlordOne: function(id){
    return knex('landlord').where('id',id)
  },

  getTenantsAddress: function(){
    return knex.select('*').from('property').leftOuterJoin('tenant', 'property.id', 'tenant.property_id')
  },

  postProperty: function (property) {
    return knex('property').insert(property)
    .returning('*')
  },

  postTenant: function (tenant) {
    return knex.select('*').from('property').then((property)=>{
      // for (var i = 0; i < property.length; i++) {
      //   if (property.address == tenant.address) {
      //
      //   }
      // }
    })
    //get all properties
    //loop through all properties
    //when property address matches tenant address add property.id - tenant.property.id
    //delete address property from tenant
    return knex('tenant').insert(tenant)
    .returning('*')
  },

  updateProperty: function(id, body) {
    return knex('property').where('id',id).update(body)
      .returning('*')
  },

  deleteProperty: function(id) {
    return knex('property').where('id',id).del()
    .returning('*')
  },

  deleteTenant: function(id) {
    return knex('tenant').where('id',id).del()
    .returning('*')
  }





}
