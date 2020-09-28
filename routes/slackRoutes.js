//Configura req POST para Slash commands 
const express = require('express'); 

const { boasVindas } = require('../controllers/slackController'); 

const routes = express.Router(); 

routes.post('/oi', boasVindas); 

module.exports = routes; 