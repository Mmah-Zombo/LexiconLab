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
const loginUser = require('./controllers/loginUser');
const settingsView = require('./controllers/user-settingsController');
const updateProfilePhoto = require('./controllers/profile_photoController');

const dashboardView = require('./controllers/dashboardController');


const sessionSetter = require('./controllers/middlewares/sessionSetter');
const AuthUser = require('./controllers/middlewares/Auth');

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
global.authUser = null;

app.use('*', sessionSetter, AuthUser);

app.get('/', (req, res) => {
    const message = req.flash('message');
    res.render('index', { message });
});

app.get('/register', registerView);

app.post('/register', registerUser);

app.get('/login', loginView);
app.post('/login', loginUser);

app.get('/settings', settingsView);

app.get('/dashboard', dashboardView);

app.post('/profile_photo', updateProfilePhoto);

app.listen(4000, () => {
    console.log('App started on port 4000')
});
