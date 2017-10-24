const express = require('express');
const router = express.Router();
const upload = require('multer')();
const AWS  = require('aws-sdk');
const uuid = require('uuid/v4');
const queries = require('../db/queries')

router.get('/', (req,res) => {
  res.json[{title:"Tenant Landlord Communication"}]
})

router.get('/landlord', (req,res) =>{
  queries.getLandlord()
    .then(landlords => {
      res.json(landlords)
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

// router.post('/property', (req,res) =>{
//   console.log(req.body);
//   queries.create(req.body)
//     .then(result => {
//       res.send(result)
//     })
// })

router.get('/tenants', (req, res) =>{
  queries.getTenants()
  .then(tenants =>{
    res.json(tenants)
  })
})




module.exports = router;
