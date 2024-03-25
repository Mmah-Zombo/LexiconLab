const User = require('../../models/User');

module.exports = async (req, res, next) => {
    await User.findById(req.session.userId)
    .then(user => {
        authUser = user;
    })
    .catch(err => console.log(err))

    next()
}
