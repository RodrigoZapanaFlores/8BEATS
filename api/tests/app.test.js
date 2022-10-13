/*const server = require("../app.js");
const supertest = require("supertest");
const supertestApp = supertest(server);
const mongoose = require("mongoose");

describe("Beats API", () => {
  beforeAll((done) => {
    mongoose.connection.addListener("connected", async () => {
      await mongoose.connection.db.dropDatabase();
      done();
    });
  });

  test("404", async () => {
    const res = await supertestApp.get("/api/v1/not-found");
    expect(res.status).toEqual(404);
  });

  test("register user", async () => {
    const res = await supertestApp.post("/api/v1/register").send({
      name: "Carlos",
      email: "carlos1@example.org",
      password: "12345678",
    });

    expect(res.status).toEqual(201);
    expect(res.body.email).toEqual("carlos1@example.org");
  });

  test.skip("auth user", async () => {});

  test.skip("create beats", async () => {});

  test.skip("list beats", async () => {});

  test.skip("beat detail", async () => {});

  test("create beat comment", async () => {
    await supertestApp.post("/api/v1/register").send({
      name: "Carlos",
      email: "carlos2@example.org",
      password: "12345678",
    });

    await supertestApp.post("/api/v1/authenticate").send({
      email: "carlos2@example.org",
      password: "12345678",
    });

    const res = await supertestApp.post("/api/v1/beats").send({});

    expect(res.status).toEqual(201);
  });
});
*/