const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
require("dotenv").config();

// Require controllers
const addNote = require('./controllers/addNote');
const getNote = require('./controllers/getNote');
const deleteNote = require('./controllers/deleteNote');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(cors());
app.use(logger('dev'));

try{

    mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
    }).then(() => {
        console.log("database connected");
    }).catch((err) => {
        console.log(err);
    })
 
    app.get("/", getNote);

    app.post("/", addNote);

    app.delete("/", deleteNote);



} catch(e){
    console.log(e);
}

finally{
    let port = process.env.PORT;
    if (port == null || port == "") {
     port = 5000;
    }
    app.listen(port, console.log(`Listening at port ${port} `));
}