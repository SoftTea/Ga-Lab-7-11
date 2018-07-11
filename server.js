const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

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

app.put('/fridge/:id', (req, res) => {
  if(req.body.edible === 'on'){
  req.body.edible = true;
} else {
  req.body.edible = false;
}

Items[req.params.id] = req.body;
res.redirect('/fridge');
});

app.get('/fridge/:id/edit', (req, res) => {

  res.render('edit.ejs', {
    item: Items[req.params.id],
    id: req.params.id
  
  });
 
  })

app.delete('/fridge/:id', (req, res) => {
  Items.splice(req.params.id, 1);
  console.log(req.params.id, ' this is req.params')
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