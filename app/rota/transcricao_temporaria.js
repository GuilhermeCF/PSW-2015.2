var controlador = require('../controller/transcricao_temporaria.js')(); //chama o controller responsável pelo serviço de transcrição

module.exports = function (app)
{
	app.get('/transcricao_temporaria', controlador.transcTemp); //GET do framework. 1º parâmetro: rota definina na URL. 2º parâmetro: função a ser executada
}