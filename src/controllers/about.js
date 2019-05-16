
module.exports.renderAbout =  (req, res, next) => {
   console.log(req);
   console.log(req.cookies.connect);

   res.render('about', { title:'Sobre Nós'});

}