const projeto = require('../../models/v1/projeto');
const cadastro = require('../../models/v1/cadastro');

module.exports.createProjeto = async (req, res) => {

  //const id = req.user.id;

 const {id_user,descricao,etapa,iniciativa,titulo,comite} = req.body

 console.log(req.body)


 try{
  const projetoDB = await projeto.create({

     iniciativa,
     titulo,
     descricao,
     etapa,
     id_user,
     comite

  })
  res.status(201).json({message:'sucesso',data:projetoDB});

}catch(error){

  res.status(400).json({message:'erro ao gravar os dados',error:error});
}
  
};

module.exports.listProjeto = async (req, res, next) => {


  try {
    
    const resultProjeto = await projeto.find({$and:[{comite:true},{hasdaprovad:true}]});

    res.status(200).json({status:200,data:resultProjeto})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas"})
    
  }

      
  
  
};
module.exports.listProjetoComite = async (req, res, next) => {


  try {
    
    const resultProjeto = await projeto.find({comite:false});

    res.status(200).json({status:200,data:resultProjeto})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas"})
    
  }

      
  
  
};

module.exports.listMyProject = async (req, res, next) => {


  try {
    
    const resultProjeto = await projeto.find({$and:[{id_user:req.params.id},{comite:true}]});

    res.status(200).json({status:200,data:resultProjeto})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas"})
    
  }

      
  
  
};

module.exports.updatetProject =  (req, res, next) => {

   const {id_projeto,descricao,etapa} = req.body



     let update ={descricao:descricao,etapa:etapa}
     let updateCadastro ={hasAprovad:false}
      projeto.findOneAndUpdate({_id:id_projeto}, update,{ new: true })
      .then(doc=>{

        cadastro.findByIdAndUpdate({_id:id_projeto}, updateCadastro,{ new: true }).then(res=>{

          res.status(202).json({message:'Atualizado com sucesso',data:doc});

        }).catch(err=>{ })
  
      })
      .catch(error=>{
  
        res.status(401).json({message:'nao autorizado',status:401});
      })

};

module.exports.updatetProjectComite =  (req, res, next) => {

  const {id_projeto} = req.body

    let update ={comite:true,hasAprovade:false}
 
     projeto.findOneAndUpdate({_id:id_projeto}, update,{ new: true })
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
  const post = await projeto.findById(req.params.id);

  await post.remove();

  return res.send();

};
