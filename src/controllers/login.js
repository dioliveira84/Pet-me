
//module.exports.renderLogin =  (req, res, next) => {
 //   const user = req.user
   // const error   = res.locals.error;
    //res.render('login', { title:'logar',user,error});
 
 //}

 module.exports.renderLogin =  (req, res, next) => {
    const user = req.user
    const error   = res.locals.error;
    res.status({user:user,error:error});
 
 }