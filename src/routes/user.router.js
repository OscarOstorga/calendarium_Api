const express = require('express');
const router = express.Router();

const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/user.controller')

router.get("/", getUsers);
router.get("/:page-:limit", getUsers)
router.get("/:id", getUser);

router.patch("/:id", updateUser)
router.post("/", createUser)
router.delete("/:id", deleteUser)

module.exports = router;