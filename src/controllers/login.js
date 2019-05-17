
module.exports.renderLogin =  (req, res, next) => {
    const user = req.user
    res.render('login', { title:'logar',user});
 
 }