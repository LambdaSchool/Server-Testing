const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("GET: unknown endpoint (/???)", () => {
    it("Should return status code 404 file not found", async () => {
      const expected = 404;

      const res = await request(server).get("/notsmurfs");
      expect(res.status).toEqual(expected);
    });
  });

  describe("GET: (/smurfs)", () => {
    it("should return status code 200 ok", async () => {
      const expected = 200;

      const res = await request(server).get("/smurfs");
      expect(res.status).toEqual(expected);
    });

    it("should return JSON", async () => {
      const expected = '[{"name":"Brainey","age":200,"height":"5cm"}]';
      const res = await request(server).get("/smurfs");

      expect(res.text).toEqual(expected);
    });
  });

  describe("POST: (/smurfs)", () => {
    it("should return status code 200 ok when correct data is provided", async () => {
      const expected = 200;

      const res = await request(server)
        .post("/smurfs")
        .send({
          name: "Smurfette",
          age: "200",
          height: "5cm"
        });
      expect(res.status).toEqual(expected);
    });

    it("should return the new smurfs array when correct data is provided", async () => {
      const expected =
        '[{"name":"Brainey","age":200,"height":"5cm"},{"name":"Smurfette","age":"200","height":"5cm","id":0},{"name":"Smurferino","age":"200","height":"5cm","id":1}]';

      const res = await request(server)
        .post("/smurfs")
        .send({
          name: "Smurferino",
          age: "200",
          height: "5cm"
        });
      expect(res.text).toEqual(expected);
    });

    it("should return error code 422 when incomplete data is passed", async () => {
      const expected = 422;

      const res = await request(server)
        .post("/smurfs")
        .send({
          age: "200",
          height: "5cm"
        });
      expect(res.status).toEqual(expected);
    });

    it("should return appropriate error message when incomplete data is passed", async () => {
      const expected =
        '{"Error":"Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB."}';

      const res = await request(server)
        .post("/smurfs")
        .send({
          age: "200",
          height: "5cm"
        });
      expect(res.text).toEqual(expected);
    });

    it("should return error code 422 when there is a smurf already with that name", async () => {
      const expected = 422;

      const res = await request(server)
        .post("/smurfs")
        .send({
          name: "Brainey",
          age: "200",
          height: "5cm"
        });
      expect(res.status).toEqual(expected);
    });

    it("should return appropriate error text when there is a smurf already with that name", async () => {
      const expected =
        '{"Error":"Ya gone did smurfed! Brainey already exists in the smurf DB."}';

      const res = await request(server)
        .post("/smurfs")
        .send({
          name: "Brainey",
          age: "200",
          height: "5cm"
        });
      expect(res.text).toEqual(expected);
    });
  });

  describe("PUT: (/smurfs/:id)", () => {
    it("It should send an error code 422 if no smurf is found by that id", async () => {
      const expected = 422;
      const res = await request(server).put("/smurfs/2204");
      expect(res.status).toEqual(expected);
    });

    it("It should send an appropriate error message if no smurf is found by that id", async () => {
      const expected = '{"Error":"No Smurf found by that ID"}';
      const res = await request(server).put("/smurfs/2204");
      expect(res.text).toEqual(expected);
    });

    it("It should send status code 200 if a smurf is found by that id", async () => {
      const expected = 200;
      const res = await request(server)
        .put("/smurfs/0")
        .send({ name: "BBraineyu" });
      expect(res.status).toEqual(expected);
    });

    it("It should return a new array if a smurf is found by that id", async () => {
      const expected =
        '[{"name":"Brainey","age":200,"height":"5cm"},{"name":"Beaineyugh","age":"200","height":"5cm","id":0},{"name":"Smurferino","age":"200","height":"5cm","id":1}]';
      const res = await request(server)
        .put("/smurfs/0")
        .send({ name: "Beaineyugh" });
      expect(res.text).toEqual(expected);
    });
  });
});
