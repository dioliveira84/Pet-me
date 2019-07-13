const notificacao = require('../../models/v1/notificacao');


module.exports.createProblem = async (req, res) => {

  const id = req.user.id;
  const {valor,premio,idprojeto} = req.body


 try{
  const notificacaoDB = await notificacao.create({
     valor,
     premio,
     id_projeto:idprojeto,
    id_user: id

  })
  res.status(201).json({message:'sucesso',data:notificacaoDB});

}catch(error){

  res.status(400).json({message:'erro ao gravar os dados',error:error});
}
  
};

module.exports.listProblem = async (req, res, next) => {


  try {
    
    const resultNotificacao = await notificacao.find({});

    res.status(200).json({status:200,data:resultNotificacao})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas",error:error})
    
  }

      
  
  
};

