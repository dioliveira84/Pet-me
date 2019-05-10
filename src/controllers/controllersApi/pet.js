const pet = require('../../models/v1/pet');

module.exports.createPet =  async (req, res, next) => {
   const { originalname: name, size, key, location: url = "" } = req.file;

   const post = await pet.create({
      name,
      size,
      key,
      url
    });
  
    return res.json(post);

}

 module.exports.listPet =  (req, res, next) => {
    res.send("Listar Pets");
 }
 module.exports.updatetPet =  (req, res, next) => {
    res.send("Atualizar Pet");
 }

 module.exports.deletetPet =  async (req, res, next) => {

   const post = await Post.findById(req.params.id);

   await post.remove();
 
   return res.send();
    res.send("Deletar Pet");
 }