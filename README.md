# A-Wing
Sistema Web do LEDS Santa Teresa para estudos sobre o *framework* Angular (A-Wing).
[<img src="https://vignette.wikia.nocookie.net/pt.starwars/images/8/8d/A-wing_DICE.png/revision/latest?cb=20180116223039" alt="A-Wing" width="50%" height="50%">](https://www.starwars.com/databank/a-wing-fighter)

## Introdução
Sistema Web com controle de acesso de usuários e cadastro de informações sobre Naves, Pilotos de Naves e esquadrões da franquia Star Wars.

## Objetivo
Este projeto se prepõe a servir de base para que os participantes do LEDS Santa Teresa elaborem a estrutura necessária para o desenvolvimento de sistemas Web baseados no *framework* Angular (por isso o nome A-Wing) e o Node.js.
O principal objetivo é o de desenvolver as habilidades de cada um dos estudantes no desenvolvimento colaborativo de um Sistema Web.

## Ferramentas
* [Angular](https://angular.io/guide/quickstart);
* [Node.js](https://nodejs.org/en/) (Módulos: express, morgan, promise-mysql, cors);
* MySql para o banco de dados;
* PhpMyAdmin para gerenciar o BD (Crie o usuário phpmyadmin, com senha phpmyadmin);
* [GitKraken](https://www.gitkraken.com/): Para controle de versão via Git;
* Editores sugeridos para o projeto:
  * [Atom](https://atom.io/)
  * [Visual Studio Code](https://code.visualstudio.com/)
* [Postman](https://www.getpostman.com/postman).

## Instalação dos módulos do projeto
* Clonar este projeto para a sua máquina via GitKraken;
* Usar o arquivo `database/db_awing.sql` para criar a base de dados via MySql ou PhpMyAdmin;
* Abrir um terminal (na pasta do projeto) e instalar os módulos necessários ao servidor:
  * `npm i`
  * `cd server`
  * `npm i`

## Execução do Projeto
* Abrir um terminal (na pasta do projeto) e executar comando para iniciar o compilador do TScript (manter ativo este terminal):
  * `cd server`
  * `npm run build`
* Abrir outro terminal (na pasta do projeto) e executar comando para iniciar o cliente em `http://localhost:4200/` e o servidor em `http://localhost:3000/`  (manter ativo este terminal):
  * `npm run serve`

## Vídeo de apoio
* [Angular Mysql CRUD Tutorial, REST API Node & Typescript](https://www.youtube.com/watch?v=lxYB79ANJM8).
* [Adding a Node + Typescript Backend to Your Angular App](https://youtu.be/Ad3fj9V7s6A)

## Dicas
* [Um modelo de ramificação Git bem-sucedido](https://nvie.com/posts/a-successful-git-branching-model/)
* [Git e contribuições para projetos Open Source - Udemy](https://www.udemy.com/share/1002c0AkodclZQQn4=/)

## Integração Contínua (CI)
* [Todas ferramentas de CI para GitHub](https://github.blog/2017-11-07-github-welcomes-all-ci-tools/)
* [Marketplace do GitHub - CI](https://github.com/marketplace/category/continuous-integration?before=Y3Vyc29yOjIx)
* [Travis CI: Instalar no GitHub](https://github.com/marketplace/travis-ci)
* [Travis CI: Documentação para Javascript/Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
* [Continuous Integration with Angular and Travis CI](https://youtu.be/ojr2Dy0Pjhw)

## Informações do Angular CLI
Siga os passos abaixo para realizar uma BUILD ou executar testes.

### Montar uma Build do projeto
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
