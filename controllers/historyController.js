module.exports = (req, res) => {
    let user = authUser || null;
    let defaultColor  = 'naples-yellow'; 
    let selectedColor = 'cerise';
    const this_route = req.route.path;
    res.render('history', {message: req.flash('message'), user, defaultColor, selectedColor, this_route});
}
