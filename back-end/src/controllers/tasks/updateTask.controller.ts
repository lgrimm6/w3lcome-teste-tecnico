import { Request, Response } from "express"
import { ITaskUpdate } from "../../interfaces/tasks"
import updateTaskServices from "../../services/tasks/updateTask.services"

const updateTaskController = async(req:Request, res:Response):Promise<Response>=>{
    const bodyRequest: ITaskUpdate = req.body
    const taskId :Number = Number(req.params.id)
    const updatedTask = await updateTaskServices(bodyRequest, taskId)
    return res.status(200).json(updatedTask)
}

export default updateTaskController