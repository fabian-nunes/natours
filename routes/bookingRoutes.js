const express = require('express');
const bookingCotroller = require('./../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get('/checkout-session/:tourId', bookingCotroller.getCheckoutSession);

router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookingCotroller.getAllBookings)
  .post(bookingCotroller.createBooking);

router
  .route('/:id')
  .get(bookingCotroller.getBooking)
  .patch(bookingCotroller.updateBooking)
  .delete(bookingCotroller.deleteBooking);

module.exports = router;
