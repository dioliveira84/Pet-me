
module.exports.renderAbout =  (req, res, next) => {

   const user = req.user

   res.render('about', { title:'Sobre Nós',user});

}