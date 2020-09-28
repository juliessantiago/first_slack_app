//Configura resposta do serviço de mensagens 
const slack = require('../services/slackService'); 

class messageController{
    message(request, response){
        slack.postTextMessage({
            channel: 'authentication' //canal criado no workospace para teste
            text: 'Bem vindo ao canal de teste de aplicação'
        }); 
        response.status(200).json({message : 'ok!'}); 
    }
}

module.exports = new messageController(); 