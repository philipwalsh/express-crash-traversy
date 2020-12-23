// the most basic express application
// set up an express constant, 
// create an express application, 
// set up a default route 
// and finally listen on port 5000
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello world - express basic application');
});
app.listen(5000);
