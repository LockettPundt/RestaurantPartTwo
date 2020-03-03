'use strict'
const express = require('express'),
restaurant = require('../models/restaurantModel'),
router = express.Router();


router.get('/:id?', async (req, res, next) => {
  const {id} = req.params;
  let displayInfo = await restaurant.getAll();
  let reviewArray;
  !!id ? reviewArray = await restaurant.getAllReviews(id) : console.log('no id');
  // console.log(id);
  // console.log(displayInfo);
  console.log(reviewArray);
  
  res.render('template', { 
    locals: {
      title: 'Restaurants',
      displayInfo: !id ? displayInfo : [],
      reviewInfo: !!id ? reviewArray : []
    },
    partials: {
      partial: !id ? 'partial-index' : 'partial-reviews'
    }
  });
});

module.exports = router;
