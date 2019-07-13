const projeto = require('../../models/v1/projeto');


module.exports.createProjeto = async (req, res) => {

  const id = req.user.id;

 const {titulo,descricao,status,prazo,valor} = req.body


 try{
  const projetoDB = await projeto.create({
     titulo,
     descricao,
     status,
     valor,
     prazo,
    id_user: id

  })
  res.status(201).json({message:'sucesso',data:projetoDB});

}catch(error){

  res.status(400).json({message:'erro ao gravar os dados',error:error});
}
  
};

module.exports.listProjeto = async (req, res, next) => {


  try {
    
    const resultProjeto = await projeto.find({});

    res.status(200).json({status:200,data:resultProjeto})

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
  const post = await Post.findById(req.params.id);

  await post.remove();

  return res.send();
  res.send('Deletar Pet');
};
