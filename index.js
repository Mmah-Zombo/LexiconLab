const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

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
