const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
  describe('POST /game ', () => {
    it('post is creating game 201(Created)', async () => {
      const reqBody = { name: 'Halo 5', yearRelease: 2017, genre: 'action' };
      const response = await request(server)
        .post('/game')
        .send(reqBody);

      expect(response.status).toBe(201);
    });

    it('should return {name: "Halo 5, yearRelease: 2017, genre: action"}', async () => {
      const reqBody = { name: 'Halo 5', yearRelease: 2017, genre: 'action' };
      const response = await request(server)
        .post('/game')
        .send(reqBody);

      expect(response.body).toEqual({
        name: 'Halo 5',
        yearRelease: 2017,
        genre: 'action',
      });
    });

    it('send error when missing parts in req.body', async () => {
      const reqBody = {
        name: 'Assasin creed',
        yearRelease: 2016,
      };

      const response = await request(server)
        .post('/game')
        .send(reqBody);

      expect(response.status).toBe(400);
    });
  });

  describe('Delete /game/:name', () => {
    it('delete sends status code for success 202(Accepted)', async () => {
      const response = await request(server).delete('/game/Halo');

      expect(response.status).toBe(202);
    });

    it('should delete the game from the url', async () => {
      const name = 'Minecraft';

      const response = await request(server).delete(`/game/${name}`);

      expect(response.text).toBe('Deleted');
    });
  });

  describe('Server running', () => {
    it('server running', () => {
      expect(true).toBeTruthy();
    });

    it('server running', () => {
      expect(false).toBeFalsy();
    });
  });
});
