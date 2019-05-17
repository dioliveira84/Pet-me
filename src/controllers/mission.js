
module.exports.renderMission =  (req, res, next) => {

    console.log(req.session.passport.user)
    const user = req.user
    res.render('mission', { title:'Missão',user});
 
 }