const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  describe('basic GET route?', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;

      //performs a GET request to the API server and inspects the response
      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatusCode);
    })

    it('should return status code 201 from smurfs POST route', async () => {
      const expectedStatusCode = 201;

      const response = await request(server).post('/smurfs', {name:'jj', age:'22', height:'44'});
      expect(response.status).toEqual(expectedStatusCode);
    })
  })
})
