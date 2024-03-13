const express = require('express');

const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressSession = require('express-session');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LexiconLab');

app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileupload());

app.use(flash());
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(4000, () => {
    console.log('App started on port 4000')
});
