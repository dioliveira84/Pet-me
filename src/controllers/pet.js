
module.exports.renderPet =  (req, res, next) => {
    const user = req.user
 
    res.render('petform', { title:'Cadastro',user});
 
 }