# Tópicos importantes

- Qual a limguagem de programação utilizada para o nosso back-end? JavaScript.
- O que é o Node.js? Runtime que roda JS no servidor.
- O que é o NPM? Node Packet Manager (Gerenciador de Pacotes do Node). Permite adicionar e remover pacotes ao projeto, além de modificar outras configurações.
- O que é o Express.js? Framework para desenvolver APIs de back-end.
- O que é uma API? Aplication Programming Interface (Interface de Programação de Aplicações). Interface é todo meio de comunicação entre ser humano e computador ou dois computadores (entidades). Interface devolve resposta à ação. Existem intefaces de entrada e saída. Interface que envolve meio físico é de hardware. Além disso, a API se comunica com o front-end, não com o usuário.
- Como mudar o formato de importação de "require" (padrão commonjs) para "module"? Mudar a configuração do type para "module" no package.json e usar "import express from 'express'"
- O que é HTTP? HyperText Transfer Protocol (Protocolo de Transferência de Hipertexto) - Faz a comunicação entre cliente e servidor.
- Quais os métodos de requisição HTTP e para que serve cada um deles? Os métodos são: GET (consultar algo na base de dados), POST (inserir dados no servidor), PUT (atualização completa dos dados na base de dados), PATCH (atualização parcial dos dados na base de dados) e DELETE (exclusão de dados).
- Para que serve o --watch ao rodar o servidor? Serve para observar alterações nos arquivos que compõem o projeto e reiniciar o servidor caso haja alguma alteração.
- Para que serve o Router do Express? Para separar um conjunto de rotas similares (com mesmo endpoint) em arquivos diferentes. Assim, facilitar a manutenção e escalabilidade do código.
- O que é um padrão de projeto? Uma solução geral para resolver problemas comuns no projeto de software.
- O que é o padrão de projeto MVC? Significa Model-View-Controller (Modelo-Visão-Controle), que estrutura as responsabilidades do código nessas três camadas.
- Qual a responsabilidade de cada Camada? A camada Modelo é responsável pelas regras de negócio e pelo acesso aos dados no banco de dados, a camada Visão é responsável por montar e apresentar a interface para o usuário, e a camada Controle é responsável por administrar o fluxo de entrada, processamento e saída de dados.
- O que é um ORM? Object-Relacional Mapping (Mapeamento Objeto-Relacional), técnica de desenvolvimento que serve como uma ponte entre bancos de dados relacionais e linguagens de programação orientada a objetos.
- Quais as vantagens de utilizar um ORM? Conseguir trocar de banco de dados mais facilmente que pelo acesso direto, além de conseguir gerar as tabelas do banco de dados a partir do Prisma Schema, e vice-versa. Além disso, não é necessário alterar todo o código da aplicação quando houver alteração de banco de dados.
- Como utilizar parâmetros de URL?
- O que é Middleware? (Exemplo Logger) O padrão de projeto para middleware em aplicações Express.js envolve a composição de middlewares em um pipeline ordenado, onde cada middleware executa uma responsabilidade específica antes de passar o controle para o próximo middleware. / Padrão de projeto que cria um fluxo de execução de funções onde cada função é uma camada chamdas middleware, e cada middleware tem a função específica na sequência de resolver uma parte de um problema.

---------

- Validação de Dados
- Tratamento de Erros
- Autenticação com JWT

### Comandos Prisma

Instalação
- npm i prisma -D
- npm i dotenv -D
Para MySQL e MariaDB
- npm install @prisma/client @prisma/adapter-mariadb mariadb

Inicia o Prisma
- npx prisma init --datasource-provider mysql --output ../generated/prisma

Gera o banco de dados a partir do schema do Prisma
- npx prisma db push

Gera o schema do Prisma a partir do banco de dados
- npx prisma db pull

Gerar as funções para interagir com os modelos mapeados no schema
- npx prisma generate