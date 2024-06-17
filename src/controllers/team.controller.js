const httpError = require("http-errors")
const Team = require("../models/team.model")

const createTeam = async(req, res, next) => {
    try{
        const { body } = req;
        const newTeam = new Team(body);
        const savedTeam = await newTeam.save();

        if(!savedTeam) throw httpError(500, "Team not Created");

        res.status(201).json({ message: "Team Created", data: savedTeam});

    } catch(error) {
        next(error)
    }
}

const getTeam = async (req, res, next) => {
    try{
        const { id } = req.params;
        const _Team = await Team.findById(id);
        if(!_Team) throw httpError(404, "Team not found");
        res.status(200).json({data: _Team});
    } catch(error) {
        next(error)
    }
}

const updateTeam = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { body } = req;
        const _Team = await Team.findById(id);
        if(!_Team) throw httpError(404, "Team not found");

        const updatedTeam =  await Team.findByIdAndUpdate(id, body, {new: true})

        if(!updatedTeam) throw httpError(500, "Team not found");
        res.status(200).json({message: "Team Updated", data: updatedTeam});
    } catch(error) {
        next(error)
    }
}

const deleteTeam = async(req, res, next) => {
    try{
        const { id } = req.params;
        const _Team = await Team.findById(id);

        if(!_Team) throw httpError(404, "Team not found");

        const deletedTeam = await Team.findByIdAndDelete(id);

        if(!deletedTeam) throw httpError(500, "“Team not deleted”");

        res.status(200).json({message: "Team deleted", data: deletedTeam});

    }catch(error){
        next(error);
    }
}

const getTeams = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Teams = await Team.find()
        .skip(page*limit)
        .limit(limit);

        if(!Teams) throw httpError(404, "No Teams found");
        res.status(200).json({ message:"Teams Found", data: Teams});

    } catch(error) {
        next(error);
    }
}

module.exports = {
    createTeam,
    getTeam,
    getTeams,
    updateTeam,
    deleteTeam
}