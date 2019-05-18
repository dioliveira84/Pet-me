
module.exports.renderMission =  (req, res, next) => {
    const user = req.user
    res.render('mission', { title:'Missão',user});
 
 }