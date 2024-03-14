module.exports = (req, res, next) => {
    loggedIn = req.session.userId;
    next();
};
