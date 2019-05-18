const pet = require('../../models/v1/pet');
const cachorro = require('../../models/v1/cats');
module.exports.createPet = async (req, res) => {

  console.log(req.file);
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
    cep

  })

  res.redirect('/pet');
};

module.exports.listPet = (req, res, next) => {
 const resultPet = pet.find();



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
