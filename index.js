const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');


// function keyword instead of arrow function
// app.get('/', function(req, res){
//     res.send('hello world');
// });

//staticly send a file
// not very sueful , but here it anyway
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


//set a static folder
app.use(express.static(path.join(__dirname,'public')));



app.listen(5000, () => console.log(`Server started on port ${PORT}`));