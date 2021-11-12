
// models for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const surveys = require('../models/surveys');

// define the book model
let survey = require('../models/surveys');


/* GET users listing. */
router.get('/', (req, res, next) => {
  // find all surveys in surveys collection
  survey.find( (err, surveys) => {
    if(err) {
      return console.error(err);
    }
    else{
      res.render('surveys/index', {
        title: 'Surveys',
        surveys: surveys
      });
    }
  });
  
});



// GET the Survey List Page in order to add new Survey
router.get('/add', (req, res, next) => {
  
  res.render('../views/surveys/details', {title: 'Add New Surveys', surveys: ''})

});

// POST process the Survey List page and create new Survey - CREATE
router.post('/add', (req, res, next) => {

  let newSurvey = survey({
    "Title": req.body.Title,
    "Author": req.body.Author
  });
  survey.create(newSurvey, (err, survey) => {
    if(err) {
      console.log(err);
      res.end(err);
    }else
    {
      res.redirect('/surveys');
    }});

});

// GET the Survey List page in order to edit existing Survey
router.get('/:id', (req, res, next) => {

  let id = req.params.id;
  survey.findById(id, (err, books) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else{
      res.render
      (
        '../views/surveys/details',
        {title: 'Update Current Survey', surveys: surveys}
      );
    }
  })
});

// POST - process information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  
  let id = req.params.id;
  let updatedSurvey = survey({
    "_id": id,
    "Title": req.body.Title,
    "Author": req.body.Author,
  });
  survey.updateOne({_id: id}, updatedSurvey, (err) => {
    if(err)
    {
      console.log(Err);
      res.end(err);
    }
    else{
      res.redirect('/surveys');
    }
  });

});

// GET - process delete by user id
router.get('/delete/:id', (req, res,  next) => {

  let id = req.params.id;

  survey.deleteOne({_id: id}, (err) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }else{
      res.redirect('/surveys');
    }
  })
});

module.exports = router;
