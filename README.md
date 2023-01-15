# Trybe Smith ⚔️

Projeto de uma API de loja de itens medievais, utilizando um banco de dados SQL, desenvolvido durante o curso de Desenvolvimento Web Full Stack da [Trybe](https://www.betrybe.com/).

A API foi construída utilizando os princípios REST e seguindo a arquitetura MSC (Model, Service, Controller), aplicando, pela primeira vez, o conceito de `classe`.

Suas principais funcionalidades são:
- Cadastro, login e autenticação de pessoas usuárias
- Busca e cadastro de productos
- Busca e cadastro de pedidos

⚠️ O conteúdo do aqruivo `Trybesmith.sql` é responsável pela criação do banco de dados usado pela API e foi fornecido pela [Trybe](https://www.betrybe.com/).

## Tecnologias
As tecnologias utilizadas para o desenvolvimento da aplicação foram:
- Node.js
- TypeScript
- MySQL
- Express
- Json Web Token
- Dotenv
- Joi

## Executando o projeto
Para executar o projeto, é necessário:

1. Clonar este repositório
  ```
  git clone https://github.com/tainnaps/trybe-smith.git
  ```
2. Instalar as dependências na branch `main`
  ```
  npm install
  ```
3. Ter um servidor MySQL no computador

4. Ter um cliente MySQL e conectá-lo ao servidor

5. Executar as queries do arquivo `Trybesmith.sql` no cliente MySQL para criar o banco de dados

6. Iniciar o servidor da aplicação
  ```
  npm start
  ```
