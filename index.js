const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5000;
const path = require('path');
const loggger = require ('./middleware/logger');

const members = require('./Members')

//middleware here - my custom
//app.use(logger);


// middle war handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//middleware here - body parser
app.use(express.json());
//middleware here - form submissions url encoded
app.use(express.urlencoded({extended: false}));

//homepage routs
app.get('/', (req, res) => res.render('index',{
    title: "Member App",
    members
}));


//set a static folder
app.use(express.static(path.join(__dirname,'public')));


//members api route
app.use('/api/members', require('./routes/api/members'));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));