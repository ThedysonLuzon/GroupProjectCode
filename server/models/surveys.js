
let mongoose = require('mongoose');

// create a model class
let Survey = mongoose.Schema({
    Title: String,
    Author: String
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', Survey);