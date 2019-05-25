
const restCountriesApi = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
function getCep(cep) {

    console.log(cep.value)

    restCountriesApi.get(`${cep.value}/json/`).then(responseFromAPI => {

        const {localidade,uf,logradouro} = responseFromAPI.data;

        document.getElementById("cidade").value = localidade
        document.getElementById("estado").value = uf
        document.getElementById("rua").value = logradouro
})
.catch(err => {
       console.log(err)
    })
}