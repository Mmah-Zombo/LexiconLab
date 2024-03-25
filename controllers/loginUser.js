const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const {username, password} = req.body;
    User.findOne({ username })
    .then((user) => {
        if(user) {
            bcrypt.compare(password, user.password)
            .then((pass) => {
                if (pass) {
                    req.session.userId = user._id;
                    req.flash('message', 'logged in to your');
                    return res.redirect('/settings');
                } else {
                    req.flash('errorMessage', 'Incorrect Password.');
                    req.flash('data', req.body);
                    return res.redirect('/login');
                }
            })
            .catch((err) => console.log(err));
            
        } else {
            req.flash('errorMessage', 'Username does not exist.');
            req.flash('data', req.body);
            return res.redirect('/login');
        }
    })
    .catch((err) => {
        return res.redirect('/login');
    })
}
