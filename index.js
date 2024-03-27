const express = require('express');

// Dependencies
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fileupload = require('express-fileupload');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

// Controller Functions
const registerUser = require('./controllers/registerUser');
const registerView = require('./controllers/registerController');
const loginView = require('./controllers/loginController');
const loginUser = require('./controllers/loginUser');
const settingsView = require('./controllers/user-settingsController');
const updateProfilePhoto = require('./controllers/profile_photoController');
const updateUser = require('./controllers/updateUser');
const deleteAccount = require('./controllers/deleteUser');
const logout = require('./controllers/logoutUser');

// Middleware Functions
const sessionSetter = require('./controllers/middlewares/sessionSetter');
const AuthUser = require('./controllers/middlewares/Auth');
const redirectIfNotLoggedIn = require('./controllers/middlewares/redirectIfNotLoggedIn');

// Connects to MongoDB server using mongoose
mongoose.connect('mongodb://localhost:27017/LexiconLab');

// Express app configurations
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

// Routes
app.get('/', (req, res) => {
    const message = req.flash('message');
    res.render('index', { message });
});

app.get('/register', registerView);

app.post('/register', registerUser);

app.get('/login', loginView);
app.post('/login', loginUser);

app.get('/settings', redirectIfNotLoggedIn, settingsView);

app.post('/profile_photo', redirectIfNotLoggedIn, updateProfilePhoto);
app.post('/update_name', redirectIfNotLoggedIn, updateUser.updateName);
app.post('/update_password', redirectIfNotLoggedIn, updateUser.updatePassword);

app.post('/logout', logout);
app.post('/delete_account', redirectIfNotLoggedIn, deleteAccount);

app.listen(4000, () => {
    console.log('App started on port 4000')
});
