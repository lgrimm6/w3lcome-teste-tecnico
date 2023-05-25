import { ITaskUpdate } from "../../interfaces/tasks"
import dataBase from "../../database/index"
import { AppError } from "../../errors";
const updateTaskServices = async(data: ITaskUpdate, taskId:Number)=>{
    const taskIndex = dataBase.findIndex(task => task.id === taskId)
    if (taskIndex === -1){
        throw new AppError(404, "Task ID not found");
    }
    dataBase[taskIndex] = {...dataBase[taskIndex], ...data}
    return dataBase[taskIndex]   
}

export default updateTaskServices