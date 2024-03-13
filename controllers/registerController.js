module.exports = (req, res) => {
    const data = req.flash('data')[0];
    let name, username, password = "";
    if (data) {
        name = data.name;
        username = data.username;
        password = data.password;
    }
    res.render('register', { name, username, password})
};
