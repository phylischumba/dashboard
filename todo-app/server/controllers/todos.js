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
  //   list all todos
  list(req, res) {
    return Todo.findAll({
      order: [["createdAt", "ASC"]],
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

  async limit(req) {
    try {
      await req.todos
        .populate({
          path: "todos",
          options: {
            limit: parseInt(10),
          },
        })
        .execPopulate();
      res.status(200).send(req.todos);
    } catch (e) {
      res.status(400).send(e.message);
    }
  },
  async sort(res, req) {
    const match = {};
    const sort = {};
    if (req.query.sortBy) {
      const str = req.query.sortBy.split(":");
      sort[str[0]] = str[1] === "desc" ? -1 : 1;
    }
    try {
      await req.todos
        .populate({
          path: "todos",
          match,
          options: {
            sort,
          },
        })
        .execPopulate();
      res.status(200).send(req.todos);
    } catch (e) {
      res.status(400).send(e.message);
    }
  },
  async skip(req, res) {
    try {
      await req.todos
        .populate({
          path: "todos",
          match,
          options: {
            limit: parseInt(10),
            skip: parseInt(10),
          },
        })
        .execPopulate();
      res.status(200).send(req.todos);
    } catch (e) {
      res.status(400).send(e.message);
    }
  },

  getLatest() {
    Todo.find(
      { published: true },
      null,
      { sort: { date: "asc" }, limit: 10 },
      function (error, todos) {
        if (error) return `${error} while fetching todos`;

        return todos; // posts with sorted length of 20
      }
    ).catch((e) => res.status(500).json({ message: "Error Occured" }));
  },
};
