const cadastro = require('../../models/v1/cadastro');


module.exports.createProblem = async (req, res) => {

 const {area,iniciativa,status,perfil,id_user,descricao,comite} = req.body


 try{
  const cadastroDB = await cadastro.create({
     area,
     iniciativa,
     status,
     perfil,
     id_user,
     descricao,
     comite,
     hasAprovad:true


  })
  res.status(201).json({message:'sucesso',data:cadastroDB});

}catch(error){

  res.status(400).json({message:'erro ao gravar os dados'});
}
  
};

module.exports.listProblem = async (req, res, next) => {


  try {
    
    const resultCadastro = await cadastro.find({comite:true});

    res.status(200).json({status:200,data:resultCadastro})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas"})
    
  }

      
  
  
};

module.exports.listProblemComite = async (req, res, next) => {


  try {
    
    const resultCadastro = await cadastro.find({comite:false});

    res.status(200).json({status:200,data:resultCadastro})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas"})
    

  }

      
  
  
};

module.exports.updateComite = async (req, res, next) => {

  const {id_projeto} = req.body
  let update ={comite:true}

  
   await cadastro.findOneAndUpdate({_id:id_projeto}, update,{ new: true })

  .then(doc=>{

    res.status(202).json({message:'Atualizado com sucesso',data:doc});

  })
  .catch(error=>{

    res.status(401).json({message:'nao autorizado',status:401});
  })
};

module.exports.massivo = (req, res, next) => {
  let dogs =[];
  dogs =  req.body.gatos;

  console.log(dogs)
  dogs.forEach(element => { cachorro.create(element)});
};

module.exports.deletetPet = async (req, res, next) => {
  const post = await cadastro.findById(req.params.id);

  await post.remove();

  return res.send();

};

