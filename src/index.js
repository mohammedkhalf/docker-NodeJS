// require Modules
const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

//init app
const PORT = process.env.PORT || 4000;   // I passed to container which port that app work on it
const app = express();

// connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
  });
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', (err) => console.log('connected to redis...'));
redisClient.connect();

//connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo'   // to connect db inside container use   mongosh -u root -p example

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI)
.then(() => console.log('connected to db....'))
.catch((err) => console.log('failed to connect to db',err));

//code
app.get('/',(req,res)=> { 
    redisClient.set('products','products is good');
    res.send('<h1> Hello bank misr bank khalf</h1>')
});

app.get('/data',async (req,res)=> { 
    const products = await redisClient.get('products')
    res.send(`<h1> Hello bank misr bank khalf</h1> <h2>${products}</h2>`)
});

app.listen (PORT , ()=> console.log(`app is up and running on port: ${PORT}`) );

