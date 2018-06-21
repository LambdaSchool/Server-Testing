const mongoose = require('mongoose');
const User = require('./User')


 describe('user', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost/testdb')
  });

  afterEach(() => {
    return User.remove();
  })

  afterAll(() => {
    return mongoose.disconnect();
  })
  
  // it('tests if we have created anyting', async () => {
  //   const username = {username: 'steve', password: 'MrSteve'};
  //   const savedUser = await User.create(username);

  //   const expectedStatusCode = 200
  //   // console.log(savedUser)
  //   expect(savedUser.username).toEqual(username.username);
  //   // expect(savedUser.status).toEqual(expectedStatusCode)
    
  // })

  it('did it delete'), async () => {
    const username = {username: 'steve', password: 'MrSteve'};
    console.log('test')
    const newHuman = await User.create(username);
    // const goodBye = await User.remove(newHuman)

    // expect(goodBye.name).not.toEqual(username.username)
  }



})