var express = require('express');
var fs = require('fs');
var Item = require('../models/item');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/createItem', function(req, res, next) {
  res.render('createItem');
});

router.get('/editItem/:itemId', function(req, res, next) {
  Item.findById(req.params.itemId, function(err, item){
    if(err) res.status(400).send(err);
    res.render('editItem', {itemId:item._id, name:item.name, description:item.description, image:item.image, price:item.price, quantity:item.quantity});
  });
});


router.get('/itemDetails/:itemId', function(req, res, next) {
  Item.findById(req.params.itemId, function(err, item){
    if(err) res.status(400).send(err);
    res.render('displayItemDetails', {name:item.name, description:item.description, image:item.image, price:item.price, quantity:item.quantity});
  });
});

module.exports = router;