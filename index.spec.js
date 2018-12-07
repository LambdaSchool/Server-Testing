// NODE MODULES, FILE IMPORTS
// ==============================================
const req = require('supertest');

const app = require('./index.js');

// TESTS
// ==============================================
describe('index.js', () => {
  describe('/ route', () => {
    it('should return a status code of 200', async () => {
      const res = await req(app).get('/');
      expect(res.status).toBe(200);
    });

    it('should return in JSON', async () => {
      let res = await req(app).get('/');
      expect(res.type).toBe('application/json');
    });

    it('should return with a body like: { you: "up?" }', async () => {
      let res = await req(app).get('/');
      expect(res.body).toEqual({ you: 'up?' });
    });
  });

  describe('post to /api/characters route', () => {
    it('should return in JSON', async () => {
      let res = await req(app)
        .post('/api/characters')
        .send({ name: 'Theon Greyjoy', house: 'Greyjoy' });
      expect(res.type).toBe('application/json');
    });

    it('should add a character', async () => {
      let res = await req(app)
        .post('/api/characters')
        .send({ name: 'Ellaria Sand', house: 'Sand' });
      expect(res.body).toEqual({ message: 'Sucessfully added character.' });
    });
  });

  describe('delete from /api/characters route', () => {
    it('should return in JSON', async () => {
      let res = await req(app).delete('/api/characters/11');
      expect(res.type).toBe('application/json');
    });

    it('should delete a chracter', async () => {
      let res = await req(app).delete('/api/characters/12');
      expect(res.body).toEqual({ message: 'Successfully deleted character.' });
    });
  });
});
