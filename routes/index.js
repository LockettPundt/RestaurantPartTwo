'use strict'
const express = require('express'),
restaurant = require('../models/restaurantModel'),
router = express.Router();


router.get('/', async (req, res, next) => {

  let displayInfo = await restaurant.getAll();

  
  res.render('template', { 
    locals: {
      title: 'Restaurants',
      displayInfo: displayInfo
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.get('/:id?', async (req, res, next) => {
  const {id} = req.params;

  const restoInfo = await restaurant.getRestaurant(id);
  const reviewArray = await restaurant.getAllReviews(id);

  
  res.render('template', { 
    locals: {
      title: 'Reviews',
      restoInfo: restoInfo,
      reviewInfo: reviewArray
    },
    partials: {
      partial: 'partial-reviews'
    }
  });
});







router.post('/', async (req, res) => {
  const {restaurant_id, review_title, reviewArea, stars} = req.body;
  console.log(req.body);
  const postReview = await restaurant.createReview(restaurant_id, review_title, parseInt(stars), reviewArea);
  
  res.send(200);
});

module.exports = router;
