import { Request, Response } from "express";
import createTaskServices from "../../services/tasks/createTask.services"
import {ITaskBodyRequest } from "../../interfaces/tasks";
const createTaskController = async(req:Request, res:Response):Promise<Response>  =>{
    const bodyRequest: ITaskBodyRequest = req.body
    const createdTask = await createTaskServices(bodyRequest)
    return res.status(201).json(createdTask)
}

export default createTaskController