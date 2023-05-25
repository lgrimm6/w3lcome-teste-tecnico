import { ITaskUpdate } from "../../interfaces/tasks"
import dataBase from "../../database/index"
const updateTaskServices = async(data: ITaskUpdate, taskId:Number)=>{
    const taskIndex = dataBase.findIndex(task => task.id === taskId)
    if (taskIndex === -1){
        return "Task not found"
    }
    dataBase[taskIndex] = {...dataBase[taskIndex], ...data}
    return dataBase[taskIndex]
    
}

export default updateTaskServices