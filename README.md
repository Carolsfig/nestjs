# Blog Pessoal – API REST 📝

API REST de um blog pessoal, desenvolvida com foco em boas práticas de backend, segurança e organização de código.

A aplicação permite o gerenciamento de Usuários, Postagens e Temas, com autenticação e controle de acesso via JWT.

## 🚀 Funcionalidades 

CRUD completo de Usuário, Postagem e Tema

Relacionamento entre entidades

Autenticação e autorização via JWT

Validação de dados

Testes automatizados

Documentação da API com Swagger

Deploy em produção

## 🛠️ Tecnologias

TypeScript, NestJS, API REST, Banco de dados SQL, JWT (JSON Web Token), Jest, Swagger, Render

## 🗂️ Arquitetura

Projeto estruturado seguindo o padrão do NestJS, com separação de responsabilidades entre controllers, services, modules, entities e DTOs.

## 🔐 Autenticação 

As rotas protegidas exigem token JWT enviado no header:

Authorization: Bearer < token >

## ▶️ Execução local
git clone https://github.com/Carolsfig/nestjs.git

cd nestjs

npm install

npm run start:dev

## 📌 Objetivo

Consolidar conhecimentos em desenvolvimento backend, modelagem de dados, autenticação, testes e documentação de APIs REST.
