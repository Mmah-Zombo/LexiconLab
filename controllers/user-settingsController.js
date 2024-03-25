module.exports = (req, res) => {
    photoUrl = authUser ? authUser.profile_photo : null;
    console.log(photoUrl)
    res.render('user-settings', {message: req.flash('message'), photoUrl});
}
