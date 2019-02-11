const request = require('supertest');
const server = require('./server.js');


describe(`The Route Handlers`, ()=> {
      describe(`Get('/')`, () => {
         test('should return an OK status code from the index route',  async() => {
               const response = await request(server).get('/');
               expect(response.status).toBe(200);
         });

         test(`It should return a JSON object from the index route`, async () => {
              const api = {api: 'Up and running now'};
              const response = await request(server).get('/');
              expect(response.type).toMatch(/json/i);
         });

         test(`It should respond with a correct object for '/users' request`, async () => {
              const emptyArray = {"age": 39, "married": true, "name": "venky"};
              const response = await request(server).get('/users');
              expect(response.body).toEqual(emptyArray);
         });

      });

      describe(`Post('/)`, () => {
           test('It should response with a success code 201 when we create a user', async () => {
                const user = {name:'venky', age:'30', married:true};
                const response = await request(server).post('/users').send(user);
                expect(response.status).toBe(201);
           });

           test(`It should respond with a 422 error code where there is no name`, async () => {
                 const user = { name: '', age:'38', married:true};
                 const response = await request(server).post('/users').send(user);
                 expect(response.status).toBe(422);
           });

           test(`It should respond with a 422 error code where there is no age details`, async () => {
            const user = { name: 'sam', age:'', married: true};
            const response = await request(server).post('/users').send(user);
            expect(response.status).toBe(422);
           });

           test(`It should respond with a 422 error code where there is no marriage details`, async () => {
            const user = { name: 'yaat', age:'32', married: ''};
            const response = await request(server).post('/users').send(user);
            expect(response.status).toBe(422);
           });
      });
});