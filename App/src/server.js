const express = require('express');
const app = express();


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/', (req, res) => {
    res.send('<center><br><br><br><br><br><h1>Hello Friends!</h1><Br><h2>Welcome to Node.js App</h2></center></h1>');
});


app.listen(3000, '0.0.0.0',() => {
    console.log('Server running on port 3000.');
});