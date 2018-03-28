const mongoose = require('mongoose');
const chai = require('chai');
const chaihttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');

const server = require('./server');
chai.use(chaihttp);

const Anime = require('./model');

describe('Server', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/test');
    const db = mongoose.connection;
    db.on('error', () => {
      console.error('connection error');
    });
    db.once('open', () => {
      console.log('we are connected');
      done();
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('[POST] /anime', () => {
    it('should add a new anime', (done) => {
      const newAnime = {
        name: 'One Piece',
        genre: 'Adventure Fantasy'
      };
      chai.request(server)
        .post('/anime')
        .send(newAnime)
        .end((err, res) => {
          if (err) {
            console.error(err);
            done();
          }
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('One Piece');
        });
      done();
    });
  });
  // describe('[GET] /anime', () => {
  
  // });
  // describe('[PUT] /anime', () => {
  
  // });
  // describe('[DELETE] /anime', () => {
  
  // });
});