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

## Execução do Projeto
* Clonar este projeto para a sua máquina via GitKraken;
* Usar o arquivo `database/db_awing.sql` para criar a base de dados via MySql ou PhpMyAdmin;
* Abrir um terminal, acessar a pasta "Server" e executar este comando para instalar os módulos necessários ao projeto:
  * npm i
* Executar o seguinte comando para iniciar o compilador do TScript (manter ativo):
  * npm run build
* Abrir um segundo terminal e iniciar o servidor:
  * npm run dev
* Abrir o endereço:
  * http://localhost:3000/
  * http://localhost:3000/starshiptype

## Vídeo de apoio
* [Angular Mysql CRUD Tutorial, REST API Node & Typescript](https://www.youtube.com/watch?v=lxYB79ANJM8).

## Dicas
* [Um modelo de ramificação Git bem-sucedido](https://nvie.com/posts/a-successful-git-branching-model/)
* [Git e contribuições para projetos Open Source - Udemy](https://www.udemy.com/share/1002c0AkodclZQQn4=/)

## Integração Contínua (CI)
* [Todas ferramentas de CI para GitHub](https://github.blog/2017-11-07-github-welcomes-all-ci-tools/)
* [Marketplace do GitHub - CI](https://github.com/marketplace/category/continuous-integration?before=Y3Vyc29yOjIx)
