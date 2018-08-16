const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('root endpoint (/)', () => {
        it('should return status code 200 OK', async () => {
            const expected = 200;

            const response = await request(server).get('/');

            expect(response.status).toEqual(expected);
        });

        it('should return JSON', async () => {
            const response = await request(server).get('/');

            expect(response.type).toEqual('application/json');
        });

        it('should return JSON', async () => {
            const expected = {
                success: true,
                data: {
                    api: 'running',
                },
            };
            const response = await request(server).get('/');

            expect(response.body).toEqual(expected);
        });
    });

    describe('POST /smurfs/:id', () => {
        it('should return status code 201', async () => {
            const expected = 201;
            const response = await request(server).post('/smurfs').send({smurf: "Papa Smurf", id: "0"});
        

            expect(response.status).toEqual(expected);
        });

        it('should return JSON', async () => {
            const response = await request(server).post('/smurfs').send({smurf: "Papa Smurf", id: "0"});
            expect(response.type).toEqual('application/json');
        })
    });
});