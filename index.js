const express = require('express');

const bodyParser = require('body-parser');
const ejs = require('ejs');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

const registerUser = require('./controllers/registerUser');
const registerView = require('./controllers/registerController');
const loginView = require('./controllers/loginController');
const sessionSetter = require('./controllers/middlewares/sessionSetter');

mongoose.connect('mongodb://localhost:27017/LexiconLab');

app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileupload());

app.use(session({
    secret: 'webpack that'
}));
app.use(flash());

global.loggedIn = null;

app.use('*', sessionSetter);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', registerView);

app.post('/register', registerUser);

app.get('/login', loginView);

app.listen(4000, () => {
    console.log('App started on port 4000')
});
