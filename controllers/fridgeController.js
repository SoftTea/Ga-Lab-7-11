const express = require('express');

const router = express.Router();

const Items = require('../models/items.js');


router.get('/', (req,res)=> {
  res.render('index.ejs', {
    items: Items
  });
  // res.send('This is something in a string inside some ')
})

router.get('/add', (req,res)=> {
  res.render('add.ejs',{

  })

})


router.post('/', (req,res)=> {
  Items.push(req.body);
  console.log(req.body);
  // console.log(Items);
  res.redirect('/fridge');
})

router.put('/:id', (req, res) => {
  if(req.body.edible === 'on'){
  req.body.edible = true;
} else {
  req.body.edible = false;
}

Items[req.params.id] = req.body;
res.redirect('/fridge');
});

router.get('/:id/edit', (req, res) => {

  res.render('edit.ejs', {
    item: Items[req.params.id],
    id: req.params.id
  
  });
 
  })

  router.delete('/:id', (req, res) => {
  Items.splice(req.params.id, 1);
  console.log(req.params.id, ' this is req.params')
  res.redirect('/fridge');
})

router.get('/:id', (req, res)=>{
  res.render('show.ejs', {
    item: Items[req.params.id]
  });
})


module.exports = router;