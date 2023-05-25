import { Request, Response } from "express";
import listAllTasksServices from "../../services/tasks/listAllTasks.services";

const listAllTasksController = async(req: Request, res: Response): Promise<Response> =>{
    const tasks = await listAllTasksServices()
    return res.status(200).json(tasks)
 }

export default listAllTasksController