const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

const fridgeController = require('./controllers/fridgeController');

app.use('/fridge', fridgeController);








app.listen(port,()=>{
    console.log('Listening on port 3000')
})