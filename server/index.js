// importing required dependencies

import express from 'express'; // framework for creating routing for our app
import bodyParser from 'body-parser'; // for sending post requests
import mongoose from 'mongoose'; // for creating modules
import cors from 'cors'; //enable cross origin requests
/* 
    old node import way
    const express = require('express');
    but new version of node supports imports importing the way we did above 
    
*/
import postRoutes from './routes/posts.js';

// in order to work with express we need to always run a function
const app = express();



// setting up body parser so that e can properly send our requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors()); 

app.use('/posts', postRoutes);
app.get('/', (req, res) => {
    res.send('This is chase-social API')
});

const CONNECTION_URL = 'mongodb+srv://<dbname>:<key>/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);