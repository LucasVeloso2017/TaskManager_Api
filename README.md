# AdonisJs Api - TaskManager

## API

Acrônimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST

um acrônimo para REpresentational State Transfer (Transferência de Estado Representativo).

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo HTTP.

O REST delimita algumas obrigações nessas transferências de dados.

Resources seria então: Uma entidade ou um objeto.

## :computer: Projeto

Essa é uma api rest desenvolvida para uma aplicação de gerenciamento de equipes
atuando como um task manager, para facilitar a administração do time envolvido como um todo.


## :rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js]
- [AdonisJs]
- [PostgreSql]


## :rocket: Executar o Projeto

```bash

    # Instalar as dependências
    $ yarn
    
    # Executar migrations para criação das tabelas nas base de dados
    $ adonis migration:run

    # Iniciar o servidor
    $ adonis serve
    
    # Iniciar o projeto em desenvolvimento
    $ adonis serve --dev
```

## :gear: Rotas da Api

┌──────────────────────────────────┬───────────┐
│ Route                            │ Verb(s)   │
├──────────────────────────────────┼───────────┤
│ `/users `                        │ POST      │
├──────────────────────────────────┼───────────┤
│ `/auth`                          │ POST      │
├──────────────────────────────────┼───────────┤
│ `/forgotPassword`                │ POST      │
├──────────────────────────────────┼───────────┤
│ `/resetPassword`                 │ PUT       │
├──────────────────────────────────┼───────────┤
│ `/file/:id`                      │ HEAD,GET  │
├──────────────────────────────────┼───────────┤
│ `/file`                          │ POST      │
├──────────────────────────────────┼───────────┤
│ `/projects`                      │ HEAD,GET  │
├──────────────────────────────────┼───────────┤
│ `/projects`                      │ POST      │
├──────────────────────────────────┼───────────┤
│ `/projects/:id`                  │ HEAD,GET  │
├──────────────────────────────────┼───────────┤
│ `/projects/:id`                  │ PUT,PATCH │
├──────────────────────────────────┼───────────┤
│ `/projects/:id`                  │ DELETE    │
├──────────────────────────────────┼───────────┤
│ `/projects/:projects_id/tasks`   │ HEAD,GET  │
├──────────────────────────────────┼───────────┤
│ `/projects/:projects_id/tasks`   │ POST      │
├──────────────────────────────────┼───────────┤
│`/projects/:projects_id/tasks/:id`│ HEAD,GET  │
├──────────────────────────────────┼───────────┤
│`/projects/:projects_id/tasks/:id`│ PUT,PATCH │
├──────────────────────────────────┼───────────┤
│`/projects/:projects_id/tasks/:id`│ DELETE    │
└──────────────────────────────────┴───────────┘


### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found!
- 5xx: Server Error
  500: Internal Server Error

