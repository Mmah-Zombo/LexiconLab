const path = require('path');
const User = require('../models/User');

module.exports = (req, res) => {
    const { username, name } = req.body;
    User.findByIdAndUpdate(req.session.userId, {username, name})
    .then(user => {
        req.flash('message', 'Name successfully updated.');
        return res.redirect('/settings');
    })
    .catch (err => {
        if (err.code === 11000) {
            req.flash('message', 'Username already in use. Try another.');
            return res.redirect('/settings');
        } else {
            req.flash('message', 'Something went wrong. Please try again.');
            res.redirect('/settings');
        }
        console.log(err)
    })
}
