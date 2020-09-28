//configurações iniciais do servidor 

const express = require('express'); 
const cors = require('cors'); 


const App = express(); 

const routes = require('../routes'); 

App 
.use(cors())
.use(express.json())
.use(routes)
.listen(4000, function(){
    console.log('Server is running')
});