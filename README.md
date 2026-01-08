# Blog Pessoal – API REST 📝

API REST desenvolvida para um blog pessoal, com foco em boas práticas de backend, segurança, organização de código e arquitetura em camadas.

O projeto simula um sistema completo de blog, incluindo autenticação, relacionamento entre entidades, testes automatizados e documentação da API.

# 🚀 Funcionalidades

CRUD completo das entidades

Relacionamento entre entidades

Autenticação e autorização via JWT

Proteção de rotas

Testes automatizados

Documentação interativa da API

Deploy do backend em produção

# 🛠️ Tecnologias e conceitos aplicados

TypeScript

NestJS

API REST

Banco de dados SQL

Autenticação com Token JWT

Testes de software com Jest

Documentação com Swagger

Deploy no Render

# 🗂️ Estrutura do projeto

O projeto segue a arquitetura padrão do NestJS, utilizando:

Controllers

Services

Modules

Entities

DTOs

Guards e Strategies para autenticação

# 🔐 Autenticação

A autenticação é feita via JWT (JSON Web Token).
Após o login, o token deve ser enviado no header das requisições protegidas:

Authorization: Bearer <token>

# 📄 Documentação da API (Swagger)

A documentação da API está disponível via Swagger, permitindo visualizar e testar os endpoints diretamente pelo navegador.

# 📌 Endpoint do Swagger:

https://blogpessoal-5p60.onrender.com

# 🧪 Testes

Os testes automatizados foram desenvolvidos utilizando Jest, cobrindo as principais regras de negócio e garantindo maior confiabilidade da aplicação.

# ☁️ Deploy

O backend foi publicado em ambiente de produção utilizando a plataforma Render.

📌 URL da API em produção: https://blogpessoal-5p60.onrender.com

# ▶️ Como executar o projeto localmente
Clone o repositório

git clone https://github.com/seu-usuario/seu-repositorio.git

Acesse a pasta do projeto

cd blog-pessoal

Instale as dependências

npm install

Configure as variáveis de ambiente (.env)

Execute a aplicação

npm run start:dev
