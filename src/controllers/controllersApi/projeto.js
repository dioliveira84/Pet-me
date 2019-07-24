const projeto = require('../../models/v1/projeto');


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
    
    const resultProjeto = await projeto.find({comite:false});

    res.status(200).json({status:200,data:resultProjeto})

  } catch (error) {

    res.status(400).json({status:400,message:"erro ao listar as iniciativas"})
    
  }

      
  
  
};
module.exports.updatetProject =  (req, res, next) => {

   const {id_projeto,titulo,descricao,status,comite,peso} = req.body


   if(!peso){

     let update ={titulo:titulo,descricao:descricao,status:status,comite:comite}
  
      projeto.findOneAndUpdate({_id:id_projeto}, update,{ new: true })
      .then(doc=>{
  
        res.status(202).json({message:'Atualizado com sucesso',data:doc});
  
      })
      .catch(error=>{
  
        res.status(401).json({message:'nao autorizado',status:401});
      })

   }else{

    let update ={comite:comite}

  
     projeto.findOneAndUpdate(id_projeto, update,{ new: true })

     .then(doc=>{
  
       res.status(202).json({message:'Atualizado com sucesso',data:doc});
  
     })
     .catch(error=>{
  
       res.status(401).json({message:'nao autorizado',status:401});
     })
   }



  


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
