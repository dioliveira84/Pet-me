const userLogin = require('../../models/v1/userLogin');
const md5 = require('md5');
const authService = require('../../config/authJwt');

const SALT_KEY ='f5b99242-6504-4ca3-90f2-05e78e5761ef';
module.exports.createJwt= async (req, res) => {

    const {usuario,email,area,perfil,senha} = req.body

    var customer = await userLogin.create({
          usuario,
          password: md5(senha + SALT_KEY),
          email,
          area,
          perfil
    })
    .then(() => {
          
       
        res.status(202).json({ message:'Cliente cadastrado com sucesso',customer:customer});

      })
      .catch(error => {
        console.log(error);
      })

}

module.exports.authenticate = async (req, res, next)=>{

    console.log(md5(req.body.password + SALT_KEY));

   
   
    userLogin.findOne({
        email:req.body.email,
        password: md5(req.body.password + SALT_KEY)
    }).then(async data =>{ 
       const token = await authService.generationToken({id:data.id,email:data.email,usuario:data.usuario,perfil:data.perfil});

        res.status(200).json({
        
            token:token,

            data:{
                email:data.email,
                usuario:data.usuario,
                id:data.id,
                perfil:data.perfil
                
            }
        })   

       }).catch(error=>{
            res.status(400).json({message:error})
        })

}