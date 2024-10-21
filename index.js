// include express file 
const express = require('express');
const product_router = require('./routes/productRouter');

//Create the instance of server

const app = express()

// get color 
require('colors')


// get data from product Router
    app.use('/',product_router)




// import the dot env file
require('dotenv').config();



// create the server by using express

app.listen(process.env.PORT,()=> console.log(`Server connected at port ${process.env.PORT.magenta}`)) 