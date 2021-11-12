let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const surveys = require('../models/surveys');

// define the survey model
let survey = require('../models/surveys');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Express',
    surveys: ''
   });
});



module.exports = router;
