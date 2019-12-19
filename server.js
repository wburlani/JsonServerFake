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

//ServerJson1


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



/**
//função Criar
app.post('/testeJson', function(req, res){
  fs.readFile('teste.json', 'utf8', function(err, data){
    if (err) {
      var response = {status: 'falha', resultado: err};
      res.json(response);
    } else {
      var obj = JSON.parse(data);
      req.body.id = obj.NovoRegistro.length + 1;

      obj.NovoRegistro.push(req.body);

      fs.writeFile('teste.json', JSON.stringify(obj), function(err) {
        if (err) {
          var response = {status: 'falha', resultado: err};
          res.json(response);
        } else {
          var response = {status: 'sucesso', resultado: 'Registro incluso com sucesso'};
          res.json(response);
        }
      });
    }
  });
});

//função Atualizar
app.put('/teste.json', function(req, res){
  fs.readFile('teste.json', 'utf8', function(err, data){
    if (err) {
      var response = {status: 'falha', resultado: err};
      res.json(response);
    } else {
      var obj = JSON.parse(data);

      obj.usuarios[(req.body.id - 1)].descricao = req.body.descricao;
      obj.usuarios[(req.body.id - 1)].caracteristicas = req.body.caracteristicas;

      fs.writeFile('db.json', JSON.stringify(obj), function(err) {
        if (err) {
          var response = {status: 'falha', resultado: err};
          res.json(response);
        } else {
          var response = {status: 'sucesso', resultado: 'Registro editado com sucesso'};
          res.json(response);
        }
      });
    }
  });
});


//função excluir
app.delete('/api', function(req, res){
  fs.readFile('db.json', 'utf8', function(err, data){
    if (err) {
      var response = {status: 'falha', resultado: err};
      res.json(response);
    } else {
      var obj = JSON.parse(data);

      delete obj.usuarios[(req.body.id - 1)];

      fs.writeFile('db.json', JSON.stringify(obj), function(err) {
        if (err) {
          var response = {status: 'falha', resultado: err};
          res.json(response);
        } else {
          var response = {status: 'sucesso', resultado: 'Registro excluído com sucesso'};
          res.json(response);
        }
      });
    }
  });
});


**/