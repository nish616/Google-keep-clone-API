const mongooose =  require('mongoose');
const Note = require('../models/note');


async function  deleteNote({deleteId}){
    console.log("deletion id : ",deleteId);
    const res = await Note.deleteOne ({id : deleteId});

    console.log("response :" ,res);
}

module.exports = deleteNote;