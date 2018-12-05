const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    it('runs tests', () => {
        expect(true).toBeTruthy();
    }); // run tests
  
    describe('post', () => {
        it('should post to /flavor/:id', async () => {
            const flavor = 'Strawberry';
            const dessert = "Shortcake"
            const expected = { message: "Me likey Strawberry Shortcake" };

            const response = await request(server)
            .post(`/flavor/${flavor}`)
            .send({ dessert })
			expect(response.body).toEqual(expected);
        }); // post to /flavor/:id

        it("should return 201 after flavor was added successfully", async () => {
            const flavor = "Strawberry";
            
            const response = await request(server)
            .post(`/flavor/${flavor}`);
            expect(response.status).toBe(201);
          }); // // should return 201 after flavor was added successfully
    }); // post
}); // server.js