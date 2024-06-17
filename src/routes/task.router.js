const express = require('express');
const router = express.Router();

const {
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    getTaskFromUser
} = require('../controllers/task.controller')

router.get("/", getTasks);
router.get("/:page-:limit", getTasks)
router.get("/:id", getTask);
router.get("/byuser/:id", getTaskFromUser);
router.get("/byteam/:id");

router.patch("/:id", updateTask)
router.post("/", createTask)
router.delete("/:id", deleteTask)

module.exports = router;