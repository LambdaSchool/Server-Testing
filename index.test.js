const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { expect } = chai;
// const Painter = require('/painterModels');
chai.use(chaiHttp);
const server = require('./index');

describe('Index', () => {
  const dbase = mongoose.connection;
  before(done => {
    console.log('before');
    mongoose.connect('mongodb://localhost/testPainters');
    dbase.on('error', () => {
      console.error('connection error');
    });
    dbase.once('open', () => {
      console.log('we are connected');
      done();
    });
  });

  after(done => {
    // console.log('after');
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('[POST] /painter', () => {
    it('should add a new painter', () => {
      const newPainter = {
        name: 'van Gogh',
        style: 'Post-Impressionism'
      };
      chai.request(server)
      .post('/painter')
      .send(newPainter)
      .end((err, res) => {
        //console.log("first log", res.body);
        if (err) console.error(err);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('van Gogh');
      });
    });
  });

  describe('[GET] /allPainters', () => {
    it("should return all the painters", () => {
      chai.request(server)
      .get("/allPainters")
      .end((err, res) => {
        // console.log("log", res.body);
        if (err) console.error(err);
        expect(res.status).to.equal(200);
        expect(res.body[0].name).to.equal("Franz Kline");
      });
    });
  });
});