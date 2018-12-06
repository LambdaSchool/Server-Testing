const request = require('supertest');
const server = require('./api/server.js');
const db = require('./database/dbConfig');

beforeEach(async () => {
    await db('users').truncate();//deletes everything from the user database including id's
});

describe('Server.JS', () => {
    describe('"/" Route', () => {
        it('Return status 200', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200)
        })
        it('Return a json object with api : up', async () => {
            const expected = { api: 'up' };
            const result = await request(server).get('/');
            expect(result.body).toEqual(expected);
        })
    })

    describe('/create-user', () => {
        it('should return welcome user', async () => {
            let response = await request(server)
            .post('/create-user')
            .send({name : 'Drew'});
    
            expect(response.body).toEqual([1]);
        });
        it('Return status 200', async () => {
            const response = await request(server).post('/create-user').send({name : "test"})
            expect(response.status).toBe(200)
        })
    });
    //needs edits
    describe('/delete-user/:id', () => {
        it('should return json', async () => {
            let response = await request(server)
            .delete('/delete-user/1')
            expect(response.type).toEqual('application/json')
        })
        it('Returns a Count of the users deleted', async () => {
            let response = await request(server).delete('/delete-user/1')
            expect(response.body).toEqual({message : `1 user was deleted`, id : `1`})
        })
    })
})