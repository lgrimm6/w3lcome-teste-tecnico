import { Request, Response } from "express";
import createTaskServices from "../../services/tasks/createTask.services"
import { ITask, ITaskCreate } from "../../interfaces/tasks";


const createTaskController = (req: Request, res: Response):Response<ITask>=> {
    const bodyRequest: ITaskCreate = req.body
    const createdTask:ITask = createTaskServices(bodyRequest)
    return res.status(201).json(createdTask)
}

export default createTaskController