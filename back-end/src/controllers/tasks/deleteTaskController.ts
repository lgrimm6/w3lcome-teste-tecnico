import { Request, Response } from "express";
import deleteTaskServices from "../../services/tasks/deleteTask.services";

const deleteTaskController = async(req: Request, res: Response):Promise<Response>=>{
    const taskId:Number = Number(req.params.id)
    const deletedTask = deleteTaskServices(taskId)
    return res.status(200).json(deletedTask)
}

export default deleteTaskController