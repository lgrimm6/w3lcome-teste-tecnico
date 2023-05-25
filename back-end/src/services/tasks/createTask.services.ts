import { v4 as uuidv4 } from 'uuid';
import { ITask, ITaskCreate } from "../../interfaces/tasks"
import dataBase from "../../database/index"
import { AppError } from '../../errors';


const createTaskServices = ({titulo}: ITaskCreate): ITask => {
    if (!titulo){
        throw new AppError(400, "Field ['titulo'] is required")
    }
    const newTask: ITask = {
        id: uuidv4(),
        titulo: titulo,
        concluida: false
    }
    dataBase.push(newTask)
    return newTask
}

export default createTaskServices