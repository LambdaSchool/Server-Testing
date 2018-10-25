const server = require('./index.js');
const request = require('supertest');

describe('server', () => {
    describe('GET /', () => {
      it('should return status code 200(OK)', async () => {
        const response = await request(server).get('/');
  
        expect(response.status).toBe(200);
  
        // return request(server)
        // .get('/')
        // .then(response => {
        //   expect(response.status).toBe(200);
        // });
      });
  
      it('should return JSON', async () => {
        const response = await request(server).get('/');
  
        expect(response.type).toBe('application/json');
      });
  
      it('should return { message: "server up" }', async () => {
        const response = await request(server).get('/');
  
        expect(response.body).toEqual({ message: 'server up' });
      });
    });
  
    describe('POST /hello/:name', () => {
      it('should greet the person', async () => {
        const name = 'Patrick';
        const lastName = 'Thompson';
        const expected = { hello: 'Patrick Thompson' };
  
        const response = await request(server)
          .post(`/hello/${name}`)
          .send({ lastName });
  
        expect(response.body).toEqual(expected);
      });
  
      it('should add person to the Doe family if no last name provided', async () => {
        const name = 'Patrick';
        const expected = { hello: 'Patrick Doe' };
  
        const response = await request(server).post(`/hello/${name}`);
  
        expect(response.body).toEqual(expected);
      });
    });
  
    it('can run more tets', () => {
      expect(false).toBeFalsy();
    });
  
    it('can run even more tets', () => {
      expect(false).toBeFalsy();
    });
  });