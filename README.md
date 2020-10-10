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


<table>
    <tr>
        <td>Route</td>
        <td>Verb</td>
    </tr>
    <tr>
        <td>/users</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>/auth</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>/forgotPassword</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>/resetPassword</td>
        <td>PUT</td>
    </tr>
    <tr>
        <td>/file/:id</td>
        <td>HEAD,GET</td>
    </tr>
    <tr>
        <td>/file</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>/projects</td>
        <td>HEAD,GET</td>
    </tr>
    <tr>
        <td>/projects</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>/projects/:id</td>
        <td>HEAD,GET</td>
    </tr>
    <tr>
        <td>/projects/:id</td>
        <td>PUT</td>
    </tr>
    <tr>
        <td>/projects/:id</td>
        <td>DELETE</td>
    </tr>
    <tr>
        <td>/projects/:projects_id/tasks</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>/projects/:projects_id/tasks</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>/projects/:projects_id/tasks/:id</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>/projects/:projects_id/tasks/:id</td>
        <td>PUT</td>
    </tr>
    <tr>
        <td>/projects/:projects_id/tasks/:id</td>
        <td>DELETE</td>
    </tr>
</table>

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

