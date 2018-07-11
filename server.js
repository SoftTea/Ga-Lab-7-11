const express = require('express');

const app = express();

const port = 3000;

const Items = require('/items');

app.get('/fridge', (req,res)=> {
  res.render('index.ejs', {
    items = Items
  });
  // res.send('This is something in a string inside some ')
})

app.get('')

app.listen(port,()=>{
    console.log('Listening on port 3000')
})