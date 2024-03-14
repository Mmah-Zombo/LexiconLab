module.exports = (req, res) => {
    const data = req.flash('data')[0];
    let username, password = "";
    if (data) {
        username = data.username;
        password = data.password;
    }
    res.render('login', { username, password})
};
