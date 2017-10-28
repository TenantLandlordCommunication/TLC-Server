const express = require('express');
const router = express.Router();
const upload = require('multer')();
const AWS  = require('aws-sdk');
const uuid = require('uuid/v4');
const queries = require('../db/queries')
const knex = require('../db/knex')


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

router.get('/tenant-address', (req,res) =>{
  queries.getTenantsAddress()
  .then(tenants =>{
    res.json(tenants)
  })

})






module.exports = router;
