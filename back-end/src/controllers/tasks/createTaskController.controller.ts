import { Request, Response } from "express";
import createTaskServices from "../../services/tasks/createTask.services"
import {ITaskCreate } from "../../interfaces/tasks";
const createTaskController = async(req:Request, res:Response):Promise<Response>  =>{
    const bodyRequest: ITaskCreate = req.body
    const createdTask = await createTaskServices(bodyRequest)
    return res.status(201).json(createdTask)
}

export default createTaskController