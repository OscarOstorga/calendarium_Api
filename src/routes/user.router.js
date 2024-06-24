const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createUser
} = require('../controllers/user.controller')

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get("/", getUsers);
router.get("/:page-:limit", getUsers)
router.get("/:id", getUser);

router.patch("/:id", updateUser)
router.post("/", createUser)
router.delete("/:id", deleteUser)

module.exports = router;