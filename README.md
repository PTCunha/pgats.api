# API de Automação

Esta API REST foi criada para fins de aprendizado de testes e automação de operações bancárias.

## Funcionalidades
- Registro de usuário
- Login
- Consulta de usuários
- Transferência de valores
- Documentação Swagger disponível em `/api-docs`

## Regras de Negócio
- Login exige usuário e senha
- Não é permitido registrar usuários duplicados
- Transferências para destinatários não favorecidos só podem ser realizadas se o valor for menor que R$ 5.000,00

## Instalação
1. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```
2. Inicie o servidor:
   ```powershell
   node server.js
   ```

## Endpoints
- `POST /users/register` — Registro de usuário
- `POST /users/login` — Login
- `GET /users` — Consulta de usuários
- `POST /transfer` — Transferência de valores
- `GET /api-docs` — Documentação Swagger

## Testes
Para testar a API, utilize ferramentas como Postman, Insomnia ou scripts automatizados com Supertest.

---

API criada para fins educacionais.
