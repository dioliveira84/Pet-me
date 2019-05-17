
module.exports.renderAbout =  (req, res, next) => {
   console.log(req);
   console.log(req.cookies.connect);
   const user = req.user

   res.render('about', { title:'Sobre Nós',user});

}