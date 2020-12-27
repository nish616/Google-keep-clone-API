const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id : String,
    title : String,
    content : String
});

module.exports = mongoose.model('Note', noteSchema);