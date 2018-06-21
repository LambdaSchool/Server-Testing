//When making a GET request, the API should respond with a status code of 200

const request = require('supertest');
const mongoose = require('mongoose');
const server = require('./server');


describe('server.js', () => {
    beforeAll(() => {
        return mongoose.connect(`mongodb://localhost/testdb`)
           
    }) 
    afterAll(() => {
        return server.disconnect();
    })

     
    it('should return OK and a JSON object from the index route', async() => {
        const expectedStatusCode = 200;
        const expectedBody = {api : 'running'}

        //do a get request to our API server(server.js)
        const response = await request(server).get('/')

        expect(response.status).toEqual(expectedStatusCode);
        expect(response.body).toEqual(expectedBody);
        expect(response.type).toEqual('application/json')

    })

})
