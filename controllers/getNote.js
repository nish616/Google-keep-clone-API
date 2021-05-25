const mongooose =  require('mongoose');
const Note = require('../models/note');


async function getNote(req,res) {
    try{
        const notes = await Note.find()
        return res.send({sucess : true, results : notes});
    }catch(err){
        return res.send({sucess : false, error : err});
    }
        

    //console.log(notes);
    
}

module.exports = getNote;