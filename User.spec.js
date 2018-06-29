const mongoose = require('mongoose');
const User = require('./User'); 

describe('userModel', () => {
    beforeAll(() => {
        return mongoose.connect('mongodb://localhost/testuserdb');
    })

    afterEach(() => {
        return User.remove();
    })

    afterAll(() => {
        return mongoose.disconnect();
    })

    //POST
    describe('create user', () => {
        it('should create users successfully', async () => {
            const testUser = { username: 'harry', password: 'potter' };
            const saveUser = await User.create(testUser);

            expect(saveUser.username).toEqual(testUser.username);
        });
        it('should hash the password before saving the user', async () => {
            const testUser = { username: 'harry', password: 'potter' };
            const saveUser = await User.create(testUser);

            expect(saveUser.password).not.toEqual(testUser.password);
            expect(saveUser.password).toHaveLength(60);
        })
        it('should be string', async () => {
            const testUser = { username: 'harry', password: 'potter' };
            const saveUser = await User.create(testUser);

            expect(typeof saveUser.username).toBe('string');
            expect(typeof saveUser.password).toBe('string');
        });
    })

    //DELETE
    describe('delete user', () => {
        it('should delete user', async () => {
            const testUser = { username: 'harry', password: 'potter' };
            const deleteUser = await User.remove(testUser);

            expect(deleteUser.name).not.toEqual('harry')
        })
    })
})