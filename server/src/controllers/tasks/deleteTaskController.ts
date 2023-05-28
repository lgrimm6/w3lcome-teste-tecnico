import { Request, Response } from "express";
import deleteTaskServices from "../../services/tasks/deleteTask.services";


const deleteTaskController = (req: Request, res: Response): Response<void> => {
    const taskId: string = req.params.id
    const deletedTask:void = deleteTaskServices(taskId)
    return res.status(200).json(deletedTask)
}

export default deleteTaskController