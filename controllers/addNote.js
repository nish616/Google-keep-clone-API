const Note = require('../models/note');
const {
    v4: uuidv4
} = require('uuid');



async function addNote(req, res) {
    try {
        const {
            title,
            content
        } = req.body;
        const newNote = new Note({
            id: uuidv4(),
            title: title,
            content: content
        });
        await newNote.save();
        return res.send({sucess : true});
    } catch (err) {
       return res.send({sucess : false, error: err});
    }

}

module.exports = addNote;