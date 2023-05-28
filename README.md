# W3lcome-teste-tecnico

Este repositório contém o código-fonte de um projeto denominado W3lcome-teste-tecnico. O projeto é dividido em duas partes: o Back-End e o Front-End. Cada uma delas possui suas próprias dependências e instruções de instalação.

## Back-End

O diretório `back-end` contém uma API REST desenvolvida em Node.js e Express.js. A API possui quatro rotas principais para manipulação de tarefas.

### Rotas

1. **GET - /tasks**

   Retorna um array de objetos de tarefa no formato JSON.

2. **POST - /tasks**

   Adiciona uma nova tarefa ao array de tarefas.

3. **PATCH - /tasks/:id**

   Atualiza uma tarefa existente com base no ID fornecido.

4. **DELETE - /tasks/:id**

   Remove uma tarefa do array de tarefas com base no ID fornecido.

### Instalação e execução

Siga as instruções abaixo para instalar e executar o Back-End:

1. Navegue até o diretório `back-end`.
2. Execute o comando `yarn install` ou `npm install` para instalar as dependências.
3. Crie um arquivo `.env` com as variáveis de ambiente necessárias, seguindo o exemplo fornecido em `.env.example`.
4. Execute o comando `yarn dev` ou `npm run dev` para iniciar o servidor.

O servidor estará rodando na porta especificada nas variáveis de ambiente.

### WorkSpace

Na raiz do diretorio back-end existe um workspace contendo todas as rotas e exemplos de request da Api. Faça o import no insomnia ou outro software similar e certifiquese de alterar a variavel `port` para testar apenas as funcionalidades da API

## Front-End

O diretório `front-end` contém um SPA (Single Page Application) desenvolvido em React com TypeScript. O Front-End consome a API fornecida pelo Back-End e exibe as tarefas em uma interface amigável.

### Instalação e execução

Siga as instruções abaixo para instalar e executar o Front-End:

1. Navegue até o diretório `front-end`.
2. Execute o comando `yarn install` ou `npm install` para instalar as dependências.
3. Execute o comando `yarn dev` ou `npm run dev` para iniciar o servidor de desenvolvimento.

O servidor de desenvolvimento será iniciado e você poderá acessar o Front-End no seu navegador.

Certifique-se de ter as dependências necessárias instaladas e as configurações corretas antes de executar cada parte do projeto.

Divirta-se explorando o W3lcome-teste-tecnico!
