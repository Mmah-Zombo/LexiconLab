const User = require('../models/User');
const flash = require('connect-flash');

module.exports = async (req, res) => {
    User.create(req.body)
    .then((user) => {
        req.session.userId = user._id;
        req.flash('message', 'created an');
        res.redirect('/settings');
    })
    .catch(err => {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        console.log(err.errors);
        return res.redirect('/register');
    });
}
