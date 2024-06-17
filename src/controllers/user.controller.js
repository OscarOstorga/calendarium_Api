const httpError = require("http-errors")
const User = require("../models/user.model")

const createUser = async(req, res, next) => {
    try{
        const { body } = req;
        const newUser = new User(body);
        const savedUser = await newUser.save();

        if(!savedUser) throw httpError(500, "User not Created");

        res.status(201).json({ message: "User Created", data: savedUser});

    } catch(error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const _User = await User.findById(id);
        if(!_User) throw httpError(404, "User not found");
        res.status(200).json({data: _User});
    } catch(error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { body } = req;
        const _User = await User.findById(id);
        if(!_User) throw httpError(404, "User not found");

        const updatedUser =  await User.findByIdAndUpdate(id, body, {new: true})

        if(!updatedUser) throw httpError(500, "User not found");
        res.status(200).json({message: "User Updated", data: updatedUser});
    } catch(error) {
        next(error)
    }
}

const deleteUser = async(req, res, next) => {
    try{
        const { id } = req.params;
        const _User = await User.findById(id);

        if(!_User) throw httpError(404, "User not found");

        const deletedUser = await User.findByIdAndDelete(id);

        if(!deletedUser) throw httpError(500, "“User not deleted”");

        res.status(200).json({message: "User deleted", data: deletedUser});

    }catch(error){
        next(error);
    }
}

const getUsers = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Users = await User.find()
        .skip(page*limit)
        .limit(limit);

        if(!Users) throw httpError(404, "No users found");
        res.status(200).json({ message:"Users Found", data: Users});

    } catch(error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}