const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members=require('./Members')
const moment = require('moment')

// function keyword instead of arrow function
// app.get('/', function(req, res){
//     res.send('hello world');
// });

//staticly send a file
// not very sueful , but here it anyway
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// create a middleware function
logger = (req, res, next) =>{
    console.log(`${req.protocol}:${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

app.use(logger);

app.get('/api/members', (req,res) =>{
    res.json(members);
});
//or could have written it this way, no curly vbraces needed
app.get('/api/members2', (req,res) => res.json(members));



//set a static folder
app.use(express.static(path.join(__dirname,'public')));



app.listen(5000, () => console.log(`Server started on port ${PORT}`));