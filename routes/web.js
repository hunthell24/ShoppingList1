const express = require('express');
const shoppingsController = require('../controllers/shoppingsController');
const router = express.Router();


router.get('/', shoppingsController.getHomePage);


router.post('/add-Shopping', shoppingsController.postNewShopping);


router.post('/delete-Shopping', shoppingsController.deleteShopping);

module.exports = router; 