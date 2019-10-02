const express = require('express');
const reviewCotroller = require('./../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews
// POST /reviews

router.use(authController.protect);

router
  .route('/')
  .get(reviewCotroller.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewCotroller.setTourUserIds,
    reviewCotroller.createReview
  );

router
  .route('/:id')
  .get(reviewCotroller.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewCotroller.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewCotroller.deleteReview
  );

module.exports = router;
