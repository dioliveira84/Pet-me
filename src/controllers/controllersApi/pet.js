const pet = require('../../models/v1/pet');
const cats = require('../../models/v1/cats');
const dogss = require('../../models/v1/dogs');
module.exports.createPet = async (req, res) => {

  const id = req.user.id;
 const {
    originalname: name, size, key, location: url = '',
  } = req.file;

 const {tipo,nome,raca,sexo,tamanho,idade,rua,estado,cidade,cep} = req.body

  const post = await pet.create({
    name,
    tipo,
    size,
    key,
    url,
    nome,
    raca,
    sexo,
    tamanho,
    idade,
    rua,
    estado,
    cidade,
    cep,
    id_user: id

  })

  res.redirect('/pet');
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
