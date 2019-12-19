# JsonServer

**Criar uma Servidor JSON FALSO para Multiplos arquivos .json**


Download NodeJs:
https://nodejs.org/en/



Criar diretório
>mkdir db

Instalar NPM do Nodejs
> npm install -g json-server

Iniciar package.json e 
> npm init -y

package-lock.json
> npm i --save json-server

**Realizar download dos arquivos json1, json2, json3 e json4 / db.js e server.js**

Executar Server.js
> node server.js
   
Acessar:
   
   localhost:3000/

   Dúvida Documentado: https://github.com/frontendbr/forum/issues/1433
   
   
   
**Próximas etapas realizar consultas dos dados nos Arquivos JSON**

>Colar bloco de Código abaixo no arquivo server.js

                  var express = require('express');
                  var bodyParser = require('body-parser');
                  var fs = require('fs');

                  var app = express();

                  app.use(bodyParser.urlencoded({ extended:true }));
                  app.use(bodyParser.json());

                  app.use(function(req, res, next){
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
                    res.setHeader("Access-Control-Allow-Headers", "content-type");
                    res.setHeader("Content-Type", "application/json");
                    res.setHeader("Access-Control-Allow-Credentials", true);
                    next();
                  });



                  //app.listen(3000, function(){ console.log('Servidor Web rodando na porta 3000') });


                  //função buscar a partir do arquivo teste.json
                  app.get('/testeJson', function(req, res){
                    fs.readFile('teste.json', 'utf8', function(err, data){
                      if (err) {
                        var response = {status: 'falha', resultado: err};
                        res.json(response);
                      } else {
                        var obj = JSON.parse(data);
                        var result = 'Nenhum usuário foi encontrado';


                        //buscar dado pelo id
                        obj.buscar.forEach(function(buscarId) {
                          if (buscarId != null) {
                            if (buscarId.id == req.query.id) {
                              result = buscarId;
                            }
                          }
                        });


                          //buscar dado pela descricao
                          obj.buscar.forEach(function(buscarDescricao) {
                          if (buscarDescricao != null) {
                            if (bucarDescricao.descricao == req.query.descricao) {
                              result = buscarDescricao;
                            }
                          }
                        });

                        var response = {status: 'sucesso', resultado: result};
                        res.json(response);
                      }
                    });
                  });



>na URL do navegar:
           **http://127.0.0.1:3000/testeJson/?id=1**
           **http://127.0.0.1:3000/testeJson/?descricao=Primeiro%20usuário**

