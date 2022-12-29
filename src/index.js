// require Modules
const express = require('express');
const mongoose = require('mongoose');

//init app
const PORT = process.env.PORT || 4000;   // I passed to container which port that app work on it
const app = express();

//connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo'   // to connect db inside container use   mongosh -u root -p example

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI)
.then(() => console.log('connect to db....'))
.catch((err) => console.log('failed to connect to db',err));

//code
app.get('/',(req,res)=> res.send('<h1> Hello bank misr bank khalf ssssss ddd </h1>'));
app.listen (PORT , ()=> console.log(`app is up and running on port: ${PORT}`) );

