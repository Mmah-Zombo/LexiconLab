module.exports = (req, res, next) => {
    if (loggedIn) next()
    else {
        req.flash('errorMessage', 'You must be logged in.');
        return res.redirect('/login')
    }
}
