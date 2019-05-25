module.exports.renderOngs =  (req, res, next) => {
    const user = req.user
    res.render('ongs', { title:'Ongs',user});
 
 }