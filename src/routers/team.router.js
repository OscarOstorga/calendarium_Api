const express = require('express');
const router = express.Router();

const {
    createTeam,
    getTeam,
    getTeams,
    updateTeam,
    deleteTeam
} = require('../controllers/team.controller')

router.get("/", getTeams);
router.get("/:page-:limit", getTeams)
router.get("/:id", getTeam);

router.patch("/:id", updateTeam)
router.post("/", createTeam)
router.delete("/:id", deleteTeam)

module.exports = router;