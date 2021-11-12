let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});



// GET the Survey List Page in order to add new Survey



// POST process the Survey List page and create new Survey - CREATE


// GET the Survey List page in order to edit existing Survey


// POST - process information passed from the details form and update the document


// GET - process delete by user id



module.exports = router;
