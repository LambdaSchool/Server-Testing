const request = require('supertest');
let server = require('./api/server.js');

beforeEach(() => {
    db = []
  });

describe('server.js', () => {
  describe('/ route', () => {
    it('should return status code 200', async () => {
      let response = await request(server).get('/');

      expect(response.status).toBe(200);

      // hit the endpont and get the response
      // request(server)
      //   .get('/')
      //   .then(response => {
      //     expect(response.status).toBe(200);
      //   });
    });

    it('should return JSON', async () => {
      let response = await request(server).get('/');

      expect(response.type).toBe('application/json');
    });

    it('should return with a body like: { api: "up" }', async () => {
      let response = await request(server).get('/');

      expect(response.body).toEqual({ api: 'up' });
    });
  });
});