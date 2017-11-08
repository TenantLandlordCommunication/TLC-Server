const express = require('express');
const router = express.Router();
const upload = require('multer')();
const AWS  = require('aws-sdk');
const uuid = require('uuid/v4');
const queries = require('../db/queries')
const knex = require('../db/knex')
const client = require('twilio')('AC7ad69373d4c5cdb224d388a90242387e','32fea1f83b5ec219f9ca887a7120095b');

router.get('/confirmation', function (req, res, next) {
  client.messages.create({
    to: "+19546581253",
    from: "+19549519256",
    body: "Rent is Due!!!",
  }, function(err, message) {
    console.log(message.sid);
  });
})

router.get('/landlord', (req,res) =>{
  queries.getLandlord()
    .then(landlords => {
      res.json(landlords)
    })
})

router.get('/landlord:id', (req, res) =>{
  queries.getlandlordOne(req.parms.id)
  .then(landlord => {
    res.json(landlord)
  })
})

router.get('/tenants', (req, res) =>{
  queries.getTenants()
  .then(tenants =>{
    res.json(tenants)
  })
})

router.get('/property', (req,res) => {
  queries.getProperty()
  .then(properties =>{
    res.json(properties)
  })
})

router.get('/property/:id', (req,res) =>{
  queries.getOne(req.params.id)
    .then(id => {
      res.json(id)
    })
  })

router.get('/tenants/:id', (req,res) =>{
  queries.getOneTenant(req.params.id)
    .then(id => {
      res.json(id)
    })
  })

router.get('/tenant-address', (req,res) =>{
  queries.getTenantsAddress()
  .then(tenants =>{
    res.json(tenants)
  })
})

router.post('/property', ( req, res) =>{
  queries.postProperty(req.body)
  .then(property =>{
    res.json(property)
  })
})

router.post('/tenants', ( req, res) =>{
  queries.postTenant(req.body)
  .then(tenant =>{

    res.json(tenant)
  })
})

router.put('/property/:id', (req,res)=>{
  queries.updateProperty(req.params.id, req.body)
  .then (data => {
    res.json(data)
  })
})


router.delete('/property/:id', (req,res) =>{
  queries.deleteProperty(req.params.id)
  .then(property =>{
    res.json(property)
  })
})

router.delete('/tenants/:id', (req,res) =>{
  queries.deleteTenant(req.params.id)
  .then(tenant =>{
    res.json(tenant)
  })
})





module.exports = router;
