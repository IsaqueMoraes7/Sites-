let chave = 'dbb21f5e313d37fb16a40fbe86ec6b17'

function colocarNaTela(dados) {
    console.log(dados)

document.querySelector('.cidade').innerHTML = 'Tempo em : ' + dados.name
document.querySelector('.temp').innerHTML =    + Math.floor(dados.main.temp) + "°C"
document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector('.umidade').innerHTML = 'Umidade : ' + dados.main.humidity + ' %'
document.querySelector('.min').innerHTML = 'Min : ' + Math.floor(dados.main.temp_min) + "°C"
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
        "&appid=dbb21f5e313d37fb16a40fbe86ec6b17&units=metric",).then((resposta) => resposta.json())

    colocarNaTela(dados)
}

function cliqueNoBotao() {
    let cidade = document.querySelector('.input-cidade').value


    buscarCidade(cidade)

}