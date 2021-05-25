const mongooose = require('mongoose');
const Note = require('../models/note');


async function deleteNote(req, res) {
    try {
        const {
            id
        } = req.body;
        await Note.deleteOne({
            id: id
        });
        return res.send({sucess : true});
    } catch (err) {
        return res.send({sucess : false, error : err});
    }
}

module.exports = deleteNote;