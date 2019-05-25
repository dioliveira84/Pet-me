const resultPet = axios.create({
    baseURL: 'https://ironpet-me.herokuapp.com/api/v1/pet/list'
});
function getPet(pet){

    console.log(pet)

    resultPet.get(`?pet=${pet}`).then(responseFromAPI => {

        document.getElementById("raca").innerHTML = "";

     console.log(responseFromAPI.data)
      let dados  = responseFromAPI.data;
      let x = document.getElementById("raca");
    
      dados.forEach(element => {
        let option = document.createElement("option");
        option.text = element.nome;
        x.add(option);
        
      });
     
     
})
.catch(err => {
       console.log(err)
    })
}