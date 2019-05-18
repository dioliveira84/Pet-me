const states = require('../../models/v1/estados');

module.exports.createEstados = async (req, res) => {

 let estados = [];
     estados =  req.body.estados;
     estados.forEach(element => { states.create(element)});
  //res.json(postEstados);
};

module.exports.listEstados = async (req, res, next) => {
 const resultEstados = await states.find({},"Capital UF")
 res.send(resultEstados)
};
module.exports.updatetEstados = (req, res, next) => {
  res.send('Atualizar Pet');
};

module.exports.deletetEstados = async (req, res, next) => {
  const postEstados = await states.findById(req.params.id);
  await postEstados.remove();
  return res.send();
 
};
