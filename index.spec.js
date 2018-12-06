const request = require('supertest');

const server = require('./api/server.js');

describe('server.js', () => {
    describe('/ route', () => {
        it('should return a status code 200', async () => {
            let response = await request(server).get('/');

            expect(response.status).toBe(200);
            //expect(response.status).toBe(500);
        });

        it('should return JSON', async () => {
            let response = await request(server).get('/');

            expect(response.type).toBe('application/json');
        });
    });

    describe('POST /addUser endpoint', () => {
        it('should return a status code 404', async () => {
            let response = await request(server).get('/addUser');

            expect(response.status).toBe(404);
        });

        it('should add a user', async () => {
            let response = await request(server)
                .post('/addUser')
                .send({ firstName: 'Shawn', lastName: 'Antonucci' });

            expect(response.body).toEqual({ Added: 'Shawn Antonucci' });
        });
    });

    describe('delete / endpoint', () => {
        it('should return a status code 200', async () => {
            let response = await request(server).get('/users');

            expect(response.status).toBe(200);
        });

        it('should delete a user', async () => {
            let response = await request(server).get('/users');
            expect(response.body).toHaveBeenCalled();
        });

        it('should return a JSON object fron the index route', async () => {
            const expectedBody = { count: '1' };

            const response = await request(server).get('/users');

            expect(response.body).toEqual(expectedBody);
        });
    });

    
});