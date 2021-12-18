const request = require("supertest");
const app = require("../app");
describe("", () => {
  it("should create a new todo", async () => {
    const res = await request(app)
      .post("/todos")
      .send({
        title: "test one",
        complete: true,
        description: "tests create todos",
        deadline: 12 - 20 - 2021,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("title");
  });
  it("should fetch a single todo", async () => {
    const todoId = 1;
    const res = await request(app).get(`/todos/${todoId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("title");
  });

  it("should fetch all todos", async () => {
    const res = await request(app).get("/todos");
    expect(res.statusCode).toEqual(200);
  });

  it("should update a todo", async () => {
    const res = await request(app)
      .put("/todos/1")
      .send({
        todoId: 1,
        title: "updated title",
        description: "Lorem ipsum",
        complete: true,
        deadline: 12 - 20 - 2021,
      });
    expect(res.statusCode).toEqual(200);
  });
});
