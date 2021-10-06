const express = require('express');
const router = express.Router();
const { foodController } = require('../controllers');

// add routes here
router.get('/api/food', foodController.getAll);
router.get('/api/food/:id', foodController.getOne);
router.post('/api/food', foodController.create);


module.exports = router;
