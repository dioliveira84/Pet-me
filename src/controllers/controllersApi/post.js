const anexo = require('../../models/v1/anexo');



module.exports.createFile= async (req, res) => {

  //const id = req.user.id;


  console.log(req.file)


  
 const {
    originalname: name, size, key, location: url = '',
  } = req.file;

 const {id_user,id_projeto,status} = req.body

  const post = await anexo.create({
    name,
    size,
    key,
    url,
    id_user,
    id_projeto,
    status

  })

  res.status(202).json({message:"anexo enviado com sucesso",data:post,status:202})
};

module.exports.listPet = async (req, res, next) => {
  const filterPet = req.query.pet;

  console.log(filterPet)


  if (filterPet=="dog"){
    const resultPet = await dogss.find({});
    res.send(resultPet);
  }else{
    const resultPet = await cats.find({});
    res.send(resultPet);
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
