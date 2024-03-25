const path = require('path');
const User = require('../models/User');

module.exports = (req, res) => {
    const photo = req.files.photo;
    photo.mv(path.resolve(__dirname, '..', 'public/img', photo.name))
    .catch(err => {throw err});
    User.findByIdAndUpdate(req.session.userId, {profile_photo: '/img/' + photo.name})
    .then(user => {
        req.flash('message', 'Profile photo successfully added.')
        return res.redirect('/settings');
    })
    .catch (err => console.log(err))
}
