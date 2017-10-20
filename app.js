const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())


const routes = require('./routes/app');

app.use(routes);

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('listening on $(port)');
})