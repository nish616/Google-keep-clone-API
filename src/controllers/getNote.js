const mongooose =  require('mongoose');
const Note = require('../models/note');


async function getNote() {

        return  await Note.find()

    //console.log(notes);
    
}

module.exports = getNote;