//Configura req POST para Slash commands 
const express = require('express'); 

const { message } = require('../controllers/slackController'); 

const routes = express.Router(); 

routes.post('/oi', message); 

module.exports = routes; 