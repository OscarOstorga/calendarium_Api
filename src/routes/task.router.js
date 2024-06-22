const express = require('express');
const router = express.Router();

const {
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    getTasksFromUser,
    getTasksFromTeam,
    getTasksFromUserAtDate,
    getTasksFromTeamAtDate
} = require('../controllers/task.controller')

router.get("/", getTasks);
router.get("/:page-:limit", getTasks)
router.get("/:id", getTask);
router.get("/byuser/:id", getTasksFromUser);
router.get("/byuser/:id/:day-:month-:year", getTasksFromUserAtDate)
router.get("/byteam/:id", getTasksFromTeam);
router.get("/byteam/:id/:day-:month-:year", getTasksFromTeamAtDate)

router.patch("/:id", updateTask)
router.post("/", createTask)
router.delete("/:id", deleteTask)

module.exports = router;