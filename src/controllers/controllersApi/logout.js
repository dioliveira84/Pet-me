

module.exports.userLogout= (req, res) => {

    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');


  }