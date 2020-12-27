const mongooose =  require('mongoose');
const Note = require('../models/note');
const { v4: uuidv4 } = require('uuid');



async function  addNote({newTitle, newContent}){
                const newNote = new Note({
                    id : uuidv4(),
                    title : newTitle,
                    content : newContent
                });
                await newNote.save();
                //console.log(newTitle);
}

module.exports = addNote;