module.exports = (req, res) => {
    res.render('user-settings', {message: req.flash('message')});
}
