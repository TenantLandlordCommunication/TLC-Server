const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')
const dbconfig = config[environment]
const knex = require('knex')
const dotenv = require('dotenv').config()

module.exports = require('knex')(dbconfig)
