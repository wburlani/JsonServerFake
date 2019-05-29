# JsonServer

Download NodeJs:
https://nodejs.org/en/

Criar diretório
>mkdir db

Instalar NPM do Nodejs
>npm install -g json-server

Iniciar package.json e 
>npm init -y

package-lock.json
>npm i --save json-server

Executar Server.js
>node server.js
   
   
   
**SERVER.JS   **
   
      
const jsonServer = require('json-server');
const db = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running');
});

**DB.JS   **

const firstJson = require('./json1.json');
const secondJson = require('./json2.json');
const thirdJson = require('./json3.json');
const fourthJson = require('./json4.json');

module.exports = () => {	
  return {
    firstJson,
    secondJson,
    thirdJson, 
    fourthJson
  };
};

