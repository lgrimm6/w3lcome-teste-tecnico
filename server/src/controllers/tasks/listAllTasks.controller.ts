import { Request, Response } from "express";
import listAllTasksServices from "../../services/tasks/listAllTasks.services";
import { ITask } from "../../interfaces/tasks";


const listAllTasksController = (req: Request, res: Response):Response<ITask[]>=>{
    const tasks:ITask[] = listAllTasksServices()
    return res.status(200).json(tasks)
 }

export default listAllTasksController