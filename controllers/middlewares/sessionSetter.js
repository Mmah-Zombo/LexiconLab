module.exports = (req, res, next) => {
    loggedIn = req.session.userId;
    console.log(loggedIn);
    next();
};
