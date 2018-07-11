const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

const Items = require('./models/items');



app.get('/fridge', (req,res)=> {
  res.render('index.ejs', {
    items: Items
  });
  // res.send('This is something in a string inside some ')
})

app.get('/fridge/add', (req,res)=> {
  res.render('add.ejs',{

  })

})
app.post('/fridge', (req,res)=> {
  Items.push(req.body);
  console.log(req.body);
  // console.log(Items);
  res.redirect('/fridge');
})

app.get('/fridge/:id', (req, res)=>{
  res.render('show.ejs', {
    item: Items[req.params.id]
  });
})





app.listen(port,()=>{
    console.log('Listening on port 3000')
})