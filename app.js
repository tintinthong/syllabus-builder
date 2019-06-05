
//initialisation
const express= require('express')
const router = require('./router.js');
const app= express();

// config
const port= 8000;

// Middleware 
app.use('/', router);
app.use(express.static ('public')) // serve static files

//Listening 
app.listen(port,()=>{console.log(`Listening on port ${port}`)} )




//https://www.terlici.com/2014/08/25/best-practices-express-structure.html