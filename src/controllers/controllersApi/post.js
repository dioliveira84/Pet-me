const anexo = require('../../models/v1/anexo');



module.exports.createFile= async (req, res) => {

  //const id = req.user.id;


  console.log(req.file)



  const { originalname,size, key, location: url = "" } = req.file;


 const {id_user,id_projeto,status} = req.body

  const post = await anexo.create({
    name:originalname,
    size,
    key,
    url,
    id_user,
    id_projeto,
    status  

  })

  res.status(202).json({message:"anexo enviado com sucesso",data:post,status:202})
};

module.exports.listAnexo = async (req, res, next) => {
  
    const resulProject = await anexo.find({id_projeto:req.params.id});
    res.status(200).json(resulProject);
 
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

module.exports.deleteAnexo = async (req, res, next) => {


  const post = await anexo.findById(req.params.id);

  await post.remove();
  res.status(200).json({message:"deletado"});
};
