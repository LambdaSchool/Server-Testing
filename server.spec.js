const request = require('supertest');

const server = require('./server'); // this is our first red, it doesn't exist


describe('server.js', () => {
    
  it('should return OK and a JSON object fron the index route', async () => {
    const expectedStatusCode = 200;
    const expectedBody = { api: 'running' };

    // do a get request to our api (server.js)
    const response = await request(server).get('/')
    // console.log(response)

    expect(response.status).toEqual(expectedStatusCode)
  });

 
  
  
}); 