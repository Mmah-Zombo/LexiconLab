module.exports = (req, res) => {
    user = authUser || null;
    res.render('user-settings', {message: req.flash('message'), user});
}
