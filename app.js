const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const twilio = require('twilio');
const client = require('twilio')('AC7ad69373d4c5cdb224d388a90242387e','32fea1f83b5ec219f9ca887a7120095b');

app.use(cors());

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())


const routes = require('./routes/app');

app.use(routes);
app.use(express.static(__dirname + '/dist'))

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('listening on $(port)');
})
