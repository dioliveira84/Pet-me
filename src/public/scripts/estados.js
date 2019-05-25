const restCountriesApi = axios.create({
    baseURL: 'https://ironpet-me.herokuapp.com/api/v1/estados/list'
});
function getStates() {

    restCountriesApi.get().then(responseFromAPI => {

      let dados  = responseFromAPI.data;
      let x = document.getElementById("cidade");
      dados.forEach(element => {
        let option = document.createElement("option");
        option.text = element.Capital;
        option.value = element.UF;
        x.add(option);
        
      });
     
     
})
.catch(err => {
       console.log(err)
    })
}