const bcrypt = require('bcrypt');
const User = require('../models/User');

function updateName(req, res) {
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

function updatePassword(req, res) { 
    const { current_password, new_password, confirm_password } = req.body;

    if ( confirm_password !== new_password ) {
        req.flash('message', 'New password does not match.');
        return res.redirect('/settings');
    }

    bcrypt.compare(current_password, authUser.password)
    .then(pass => {
        bcrypt.hash(new_password, 10, function(err, hash) { 
            User.findByIdAndUpdate(authUser._id, { password: hash })
            .then(user => {
                req.flash('message', 'Password successfully changed.');
                return res.redirect('/settings');
             });
        });
    })
    .catch(err => {
        req.flash('message', 'Incorrect password.');
        res.redirect('/settings');
        console.log(err);
    }) 
}

module.exports = { updateName, updatePassword }