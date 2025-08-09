//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../app');

//Testes
describe('TransferController', () => {
    describe('POST /transfer', () => {
        it ('Quando informo rementente e destinatário inexistentes recebo 400', async () => {
             const resposta = await request(app)
             .post('/transfer')
             .send({
                from: "Michel",
                to: "João",
                value: 100
             });
            
             expect(resposta.status).to.equal(400);
             expect(resposta.body).to.have.property('error', 'Usuário ou destinatario não encontrado.');
       });
    });

    describe ('GET /transfers', () => {
        //Its ficam aqui
    });
});