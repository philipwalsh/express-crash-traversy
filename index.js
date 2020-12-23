const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// function keyword instead of arrow function
// app.get('/', function(req, res){
//     res.send('hello world');
// });

app.get('/', (req, res) => {
    res.send('hello world - first application');
});
app.listen(5000, () => console.log(`Server started on port ${PORT}`));