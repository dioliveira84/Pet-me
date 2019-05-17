const pet = require('../../models/v1/pet');

module.exports.createPet = async (req, res) => {

  
 const {
    originalname: name, size, key, location: url = '',
  } = req.file;

 const {tipo,nome,raca,sexo,tamanho,idade,endereco} = req.body

  const post = await pet.create({
    name,
    tipo,
    size,
    key,
    url

  })

  res.json(post);
};

module.exports.listPet = (req, res, next) => {
 const resultPet = pet.find();



};
module.exports.updatetPet = (req, res, next) => {
  res.send('Atualizar Pet');
};

module.exports.deletetPet = async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  await post.remove();

  return res.send();
  res.send('Deletar Pet');
};
