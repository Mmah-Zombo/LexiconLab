const User = require('../models/User');
const flash = require('connect-flash');

module.exports = async (req, res) => {
    User.create(req.body)
    .then((user) => {
        req.session.userId = user._id;
        res.redirect('/');
    })
    .catch(err => {
        req.flash('data', req.body);
        console.log(err.errors);
        return res.redirect('/register');
    });
}
