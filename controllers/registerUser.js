const User = require('../models/User');

module.exports = async (req, res) => {
    User.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => {
        res.redirect('/register');
        console.log(err.errors);
    });
}
