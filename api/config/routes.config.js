const express = require('express');
const router = express.Router();
const beats = require('../controllers/beats.controller')

router.get('/beats', beats.list);
router.post('/beats', beats.create);
router.get('/beats/:id', beats.detail);
router.put('/beats/:id', beats.update);
router.delete('/beats/:id', beats.delete);

module.exports = router;

