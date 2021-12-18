const Todo = require("../models").Todo;

module.exports = {
  // create a todo
  create(req, res) {
    return Todo.create({
      title: req.body.title,
      description: req.body.description,
      complete: req.body.complete,
      deadline: req.body.deadline,
    })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(400).send(error));
  },
  //  list all todos with  and without query params
  list(req, res) {
    const sortEnum = ["ASC", "DESC"];
    let isSorting = false;
    let sortVar = req?.query?.sort?.toUpperCase() || "";
    if (sortEnum.includes(sortVar)) {
      isSorting = true;
    }
    return Todo.findAll({
      ...(req.query.limit && { limit: req.query.limit }),
      ...(req.query.skip && { offset: req.query.skip }),

      order: [...(isSorting ? [["id", sortVar]] : [["createdAt", "DESC"]])],
    })
      .then((todos) => res.status(200).send(todos))
      .catch((error) => res.status(400).send(error));
  },
  //   get single todo
  retrieve(req, res) {
    return Todo.findByPk(req.params.todoId)
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo Not Found",
          });
        }
        return res.status(200).send(todo);
      })
      .catch((error) => res.status(400).send(error));
  },
  //   edit/update single todo
  update(req, res) {
    return Todo.findByPk(req.params.todoId)
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo Not Found",
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
            description: req.body.description || todo.description,
            complete: req.body.complete || todo.complete,
            deadline: req.body.deadline || todo.deadline,
          })
          .then(() => res.status(200).send(todo)) // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  //   delete a single todo
  destroy(req, res) {
    return Todo.findByPk(req.params.todoId)
      .then((todo) => {
        if (!todo) {
          return res.status(400).send({
            message: "Todo Not Found",
          });
        }
        return todo
          .destroy()
          .then(() =>
            res.status(200).send({ message: "Todo deleted successfully." })
          )
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
