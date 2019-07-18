const  jwt = require('jsonwebtoken');

const SALT_KEY ='f5b99242-6504-4ca3-90f2-05e78e5761ef';

exports.generationToken = async (data) =>{

    return jwt.sign(data,SALT_KEY,{expiresIn: '1d'});

}

exports.decodeToken = async (token) =>{

    var  data = await jwt.verify(token, SALT_KEY);
    
    return data;

}

exports.authorize = async function (req,res,next){

    var  token  = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token){

       res.status(401).json({message:'Acesso restrito'});

    }else{

    jwt.verify(token,SALT_KEY, (error,decoded)=>{

        if(error){
            res.status(401).json({message:'token invalido'});
        }else{
            next();
        }
    });

    }



}