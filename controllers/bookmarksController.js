module.exports = (req, res) => {
    let user = authUser;
    let defaultColor  = 'cerise'; 
    let selectedColor = 'naples-yellow';
    let sidebarColor = 'yale-blue';
    const this_route = req.route.path;
    res.render('bookmarks', { message: req.flash('message'), user, defaultColor, selectedColor, sidebarColor, this_route});
}