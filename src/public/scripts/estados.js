const restCountriesApi = axios.create({
    baseURL: 'http://localhost:3008/api/v1/estados/list'
});
function getStates() {

    restCountriesApi.get().then(responseFromAPI => {

      let dados  = responseFromAPI.data;
      let x = document.getElementById("cidade");
      dados.forEach(element => {
        let option = document.createElement("option");
        option.text = element.Capital;
        option.option = element.UF;
        x.add(option);
        
      });
     
     
})
.catch(err => {
       console.log(err)
    })
}