# Almoxarifado

Sistema de gerenciamento de almoxarifado desenvolvido com Java e Spring Boot, como projeto prático para aplicação de conceitos de modelagem de dados, SQL, JPA e desenvolvimento de APIs REST.

## Objetivo

Controlar materiais, depósitos, quantidades em estoque e movimentações de entrada e saída, mantendo a integridade dos dados por meio de chaves primárias e estrangeiras.

## Tecnologias utilizadas

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- SQL
- H2 Database
- Maven

## Modelo de dados

O banco de dados é organizado em quatro tabelas principais:

- **deposito:** armazena os depósitos.
- **material:** armazena os materiais e suas unidades de medida.
- **estoque:** relaciona materiais e depósitos, registrando suas quantidades.
- **movimentacao:** registra as entradas e saídas de materiais.

A tabela `estoque` resolve o relacionamento muitos para muitos entre materiais e depósitos, utilizando uma chave primária composta pelos códigos do material e do depósito.

### Diagrama do modelo
## Modelo de dados
![Diagrama do banco de dados](docs/modelo-dados.png)

## Como executar o projeto

1. Clone o repositório.
2. Abra o projeto na IDE de sua preferência, como o IntelliJ IDEA.
3. Confira as configurações de conexão com o banco no arquivo `src/main/resources/application.properties`.
4. Execute a classe `AlmoxarifadoApplication`.
5. Verifique o console da aplicação para confirmar se a inicialização ocorreu sem erros.

Os scripts `schema.sql` e `data.sql`, localizados em `src/main/resources`, definem a estrutura do banco e os dados iniciais.

## Estrutura do projeto

- `src/main/java`: código-fonte Java.
- `src/main/resources/application.properties`: configurações da aplicação.
- `src/main/resources/schema.sql`: criação das tabelas e restrições.
- `src/main/resources/data.sql`: inserção dos dados iniciais.
- `RESPOSTAS.md`: respostas e justificativas técnicas do desafio.

## API REST

Esta seção será atualizada conforme os endpoints forem implementados e testados.

Para cada endpoint, serão documentados o método HTTP, a URL, os dados enviados, um exemplo de requisição e a resposta esperada.

## Status do projeto

Em desenvolvimento.
