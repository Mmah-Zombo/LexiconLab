module.exports = (req, res) => {
    user = authUser || null;
    let defaultColor  = 'cerise'; 
    let selectedColor = 'antique-white';
    const this_route = req.route.path;
    res.render('user-settings', {message: req.flash('message'), user, defaultColor, selectedColor, this_route});
}
