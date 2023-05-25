var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var marksheetSchema = new Schema({
    Roll_No:{
        type: Number,
        required: true,
    },

    Name:{
        type: String,
        required: true,
    },

    Date_of_Birth:{
        type: String,
        required: true,
    },

    Score:{
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('marksheets', marksheetSchema);