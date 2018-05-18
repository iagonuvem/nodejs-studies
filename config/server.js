// Instancia dos modulos
var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

/**
 *  Inclui e instancia um modulo, no caso o modulo de testes criado, note que
 * é uma boa prática incluir "./" antes para indicar o caminho ate o arquivo, partindo
 * do diretório raiz do projeto
*/
//var msg = require("./mod_test");

// Inicializa o Express
var app = express();

// Seta as configurações do Express
app.set('view engine', 'ejs');
app.set('views' , './app/views');

// Middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/**
 * AutoLoad da aplicação, todos os diretorios que estiverem aqui serão
 * carregados para dentro da aplicação
 */
consign()
    .include('app/routes')
    .then('config/dbConnection.js') // Nesse caso precisa se colocar a extensao '.js', para referenciar apenas o arquivo, e não o diretorio
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;