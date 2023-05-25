import { ITask, ITaskUpdate } from "../../interfaces/tasks"
import dataBase from "../../database/index"
import { AppError } from "../../errors";

const updateTaskServices = (data: ITaskUpdate, taskId:string):ITask=>{
    const taskUpdate:ITaskUpdate = {}
    data.titulo && (taskUpdate.titulo=data.titulo)
    data.concluida && (taskUpdate.concluida=data.concluida)

    const taskIndex = dataBase.findIndex(task => task.id === taskId)

    if (taskIndex === -1){
        throw new AppError(404, "Task ID not found");
    }

    dataBase[taskIndex] = {...dataBase[taskIndex], ...taskUpdate}

    return dataBase[taskIndex]   
}

export default updateTaskServices