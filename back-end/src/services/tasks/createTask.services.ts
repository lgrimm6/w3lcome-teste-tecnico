import { ITask, ITaskBodyRequest } from "../../interfaces/tasks"
import dataBase from "../../database/index"
const createTaskServices = async(data:ITaskBodyRequest)=>{
    const newTask: ITask = {
        id: 1,
        titulo: data.titulo,
        concluida: false
    }
    dataBase.push(newTask)
    return newTask
}

export default createTaskServices