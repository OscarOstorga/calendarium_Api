const httpError = require("http-errors")
const Task = require("../models/task.model")

const createTask = async(req, res, next) => {
    try{
        const { body } = req;
        const newTask = new Task(body);
        const savedTask = await newTask.save();

        if(!savedTask) throw httpError(500, "Task not Created");

        res.status(201).json({ message: "Task Created", data: savedTask});

    } catch(error) {
        next(error)
    }
}

const getTask = async (req, res, next) => {
    try{
        const { id } = req.params;
        const _Task = await Task.findById(id);
        if(!_Task) throw httpError(404, "Task not found");
        res.status(200).json({data: _Task});
    } catch(error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { body } = req;
        const _Task = await Task.findById(id);
        if(!_Task) throw httpError(404, "Task not found");

        const updatedTask =  await Task.findByIdAndUpdate(id, body, {new: true})

        if(!updatedTask) throw httpError(500, "Task not found");
        res.status(200).json({message: "Task Updated", data: updatedTask});
    } catch(error) {
        next(error)
    }
}

const deleteTask = async(req, res, next) => {
    try{
        const { id } = req.params;
        const _Task = await Task.findById(id);

        if(!_Task) throw httpError(404, "Task not found");

        const deletedTask = await Task.findByIdAndDelete(id);

        if(!deletedTask) throw httpError(500, "“Task not deleted”");

        res.status(200).json({message: "Task deleted", data: deletedTask});

    }catch(error){
        next(error);
    }
}

const getTasks = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Tasks = await Task.find()
        .skip(page*limit)
        .limit(limit);

        if(!Tasks) throw httpError(404, "No Tasks found");
        res.status(200).json({ message:"Tasks Found", data: Tasks});

    } catch(error) {
        next(error);
    }
}

const getTaskFromUser = async (req, res, next) => {
    try{
        const {id} = req.params;
        const UserTasks = await Task.find({UserRef : id})

        if(!UserTasks) throw httpError(404, "No Tasks found");
        res.status(200).json({ message:"Tasks Found", data: UserTasks});

    } catch(error) {
        next(error);
    }
}

module.exports = {
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask
}