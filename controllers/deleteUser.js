const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = (req, res ) => { 
    const password = req.body.password;

    bcrypt.compare(password, authUser.password)
    .then(pass => {
        if (pass) {
            User.findByIdAndDelete(authUser._id)
            .then(user => {
                req.flash('message', 'User deleted');
                return res.redirect('/register');
            })
        } else {
            req.flash('message', 'Incorrect Password.');
            return res.redirect('/settings');
        }
        
    })
    .catch(err => { 
        console.log(err);
        return res.redirect('/settings');
    });
}
