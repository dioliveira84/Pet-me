
module.exports.renderHelp =  (req, res, next) => {
    const user = req.user
    res.render('help', { title:'Ajuda',user});
 
 }