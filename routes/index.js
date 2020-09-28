const express = require('express'); 
const slackRoutes = require('./slackRoutes'); 

const routes = express.Router(); 

routes.use('/slack', slackRoutes); 

module.exports = routes; 