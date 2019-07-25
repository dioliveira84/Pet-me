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
     comite


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
module.exports.updatetPet = (req, res, next) => {
  res.send('Atualizar Pet');
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
