## O que é JavaScript
Javascript é uma linguagem de programação *INTERPRETADA* feita inicialmente,para ser interpretada apenas pelos navegadores Web, logo era ela utilizada apenas no *client-side* e não era utilizada nos servidores, porém isso mudou após ser desenvolvido um interpretador de código javascript, chamado de *NodeJS* escrito em C++, baseado na engine v8 do Google Chrome, o qual possibilitou o JavaScript a ser compilado (compilado = Transformado em linguagem de máquinas, vulgos 0's e 1's). 

## O que é NodeJS
NodeJs é uma espécie de **interpretador/compilador** de código Javascript, isto é, ele possibilita que se desenvolva programas escritos na linguagem javascript que são capazes de rodar diretamente na máquina, ou seja, traduz o javascript para linguagem de máquina

## Outros modulos utilizados
Além do nodeJS, outros módulos foram utilizados para desenvolvimento das aplicaçoes deste repositório, como por exemplo:

- ExpressJs - *Framework JS para NodeJS* 
- Nodemon - *utilitario que reinicia automaticamente o app enquanto desenvolvemos*
- EJS - *engine de views para NodeJS*
- consign - *inicializador das rotas, models do NodeJS*

# Pattern MVC
O padrão MVC (Model, View e Controller) nos permite separar as lógicas de entrada, lógicas de negócio e lógicas de interface com usuário em locais bem especificos do nosso app, para facilitar e agilizar o trabalho em equipe

- MODEL : Representam os dados da aplicação e neles são centralizadas as regras de negócio, utilizamos para manipular tabelas no banco de dados

- VIEW : Servem para fornecer a representação/visualização dos dados, nesse caso, utilizamos o EJS para fornecer um HTML renderizado com os dados

- CONTROLLER : Mediador entre model e View, ele recebe as requisições dos clientes e converte-as em comandos.