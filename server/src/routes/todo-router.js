const express = require("express");

const todoCtrl = require("../controllers/todo-controller");

const router = express.Router();

router.post("/", todoCtrl.createItem);
router.get("/", todoCtrl.getTodos);
router.put("/:id", todoCtrl.updateTodo);
router.delete("/:id", todoCtrl.deleteTodo);

module.exports = router;
