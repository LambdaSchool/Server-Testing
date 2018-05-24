const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const Dog = require('./Dog')

describe('Dogs', () => {
    let dogId;
    beforeEach(done => {
        const newDog = new Dog({
            name: "Kenzie",
            breed: "English Settler"
        });
    newDog
        .save((err, savedDog) => {
            if(err) {
                console.log(err);
            } else {
              dogId = savedDog._id;
            }
            done();
        })
    });

    afterEach(() => {
        return Dog.remove();
    });

    afterAll(() => {
        Dog.remove().then(() => mongoose.disconnect());
    });

describe('GET to /api/dogs', () => {
    it('should get a list of dog breeds', async() => {
        const response = await request(server).get('/api/dogs');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    })
});


describe('POST to /api/dogPost', () => {
    it('should add a new dog to DB', async() => {
        const dog = { name: "Kenzie", breed: "English Settler" };
        const response = await request(server)
            .post('/api/dogPost')
            .send(dog);
        
        expect(response.status).toEqual(201);
        expect(response.type).toEqual('application/json');
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('breed');
    })
});

    
    beforeAll(() => {
        return mongoose
            .connect('mongodb://localhost/testingdb')
            .then(console.log('connected to test db'));
    });

    beforeEach(() => {
        // return Dog.remove();
    });

    afterEach(() => {
        return Dog.remove();
    });

    afterAll(() => {
        return mongoose.disconnect();
    });

    it('should hash the password before saving the dog', async () => {
        const dog = { breed: 'frodo', password: 'irrelevant' };

        const savedDog = await Dog.create(dog);

        expect(savedDog.password).not.toEqual(dog.password);
        expect(savedDog.password).toHaveLength(60);
    });
});