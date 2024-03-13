const User = require('../models/User');
const flash = require('connect-flash');

module.exports = async (req, res) => {
    User.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => {
        req.flash('data', req.body);
        console.log(err.errors);
        res.redirect('/register');
    });
}
