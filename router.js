
var express = require('express');
var router = express.Router();

//A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), 
//an URL path/pattern, and a function that is called to handle that pattern.

router.get('hello/:name',function(req,res){

    // controller?
    res.send('hello'+req.params.name)
})

// Home page route.
router.get('/', function (req, res) {
    res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})


router.post('/about', function (req, res) {
    res.send('About this wiki');
})

// some route patters

router.get('/about?', function (req, res) {
    res.send('About this wiki');
})
//the abou or about


router.get('/about1', function (req, res) {
    res.send('About this wiki');
})
// about or aboutt or abouttt etc

router.get('/about1', function (req, res) {
    res.send('About this wiki');
})


// app.get(/.*fish$/, function (req, res) {
//     res.send('you just ysed a regular expression')
// })


// app.get(/.*fish$/, function (req, res) {
//     res.send('you just ysed a regular expression')
// })

module.exports = router;