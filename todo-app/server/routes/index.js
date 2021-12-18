const todosController = require("../controllers").todos;

module.exports = (app) => {
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Todo Api!",
    })
  );
  //  CRUD routes for todos
  app.post("/todos", todosController.create);
  app.get("/todos", todosController.list);
  app.get("/todos/:todoId", todosController.retrieve);
  app.put("/todos/:todoId", todosController.update);
  app.delete("/todos/:todoId", todosController.destroy);
  app.get("/todos?limit=10", todosController.limit);
  app.get("/todos?limit=10&skip=10", todosController.skip);
  app.get("/todos?sort=asc|desc", todosController.sort);
};
