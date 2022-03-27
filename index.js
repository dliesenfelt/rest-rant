//Dependencies
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();

//Express Setings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//Controllers
app.use('/places', require('./controllers/places'));

//Routes
app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('error404')
});

//Listen
app.listen(process.env.PORT);
console.log("Server Naruto running @PORT: " + process.env.PORT);