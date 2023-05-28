import { Request, Response } from "express"
import { ITask, ITaskUpdate } from "../../interfaces/tasks"
import updateTaskServices from "../../services/tasks/updateTask.services"

const updateTaskController = (req: Request, res: Response): Response<ITask> => {
    const bodyRequest: ITaskUpdate = req.body
    const taskId: string = req.params.id
    const updatedTask: ITask = updateTaskServices(bodyRequest, taskId)
    return res.status(200).json(updatedTask)
}

export default updateTaskController