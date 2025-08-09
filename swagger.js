module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API de Automação',
    version: '1.0.0',
    description: 'API para testes e automação de operações bancárias.'
  },
  paths: {
    '/users/register': {
      post: {
        summary: 'Registrar usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  password: { type: 'string' },
                  favorecido: { type: 'boolean' }
                },
                required: ['username', 'password']
              }
            }
          }
        },
        responses: {
          201: { description: 'Usuário registrado.' },
          409: { description: 'Usuário já existe.' }
        }
      }
    },
    '/users/login': {
      post: {
        summary: 'Login de usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['username', 'password']
              }
            }
          }
        },
        responses: {
          200: { description: 'Login realizado.' },
          401: { description: 'Credenciais inválidas.' }
        }
      }
    },
    '/users': {
      get: {
        summary: 'Consultar usuários',
        responses: {
          200: { description: 'Lista de usuários.' }
        }
      }
    },
    '/transfer': {
      post: {
        summary: 'Transferência de valores',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  from: { type: 'string' },
                  to: { type: 'string' },
                  amount: { type: 'number' }
                },
                required: ['from', 'to', 'amount']
              }
            }
          }
        },
        responses: {
          200: { description: 'Transferência realizada.' },
          403: { description: 'Transferência não permitida.' }
        }
      }
    }
  }
};
