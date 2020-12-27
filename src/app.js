const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const addNote = require('../src/controllers/addNote');
const getNote = require('../src/controllers/getNote');
const deleteNote = require('../src/controllers/deleteNote');


const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

try{

    mongoose.connect('mongodb://localhost:27017/notesDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    

   
    app.get("/",(req,res) => {

        const notes =  getNote();
        notes.then( (result) => {
            //console.log(result);
            res.json(result);
            
        });
  
        
    });

    app.post("/", (req,res) => {

            //onsole.log(req.body);
        const {title, content} = req.body;
        addNote({newTitle : title, newContent: content})
                .then(res.json(req.body))
                .catch((err) => {
                    console.log(err);
                });


    });

    app.delete("/", (req,res) => {

        const {id} = req.body;

        deleteNote({deleteId : id})
                    .then(res.status(200).json({ msg: `Note deleted!`}))
                    .catch((err) => console.log("error : ",err));

    });



} catch(e){
    console.log(e);
}

finally{
    app.listen('5000', console.log("Listening at port 5000"));
}