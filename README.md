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
- O que é um padrão de projeto?
- O que é o padrão de projeto MVC?
- Qual a responsabilidade de cada Camada?