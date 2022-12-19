const express = require('express');


const PORT = process.env.PORT || 4000;   // I passed to container which port that app work on it

const app = express();

app.get('/',(req,res)=> res.send('<h1> Hello bank misr bank khalf ssssss ddd </h1>'));

app.listen (PORT , ()=> console.log(`app is up and running on port: ${PORT}`) );

