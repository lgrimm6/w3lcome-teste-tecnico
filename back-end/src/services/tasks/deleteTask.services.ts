import dataBase from "../../database/index"
import { AppError } from "../../errors";


const deleteTaskServices = (taskId: string): void => {
    const taskIndex = dataBase.findIndex(task => task.id === taskId)
    if (taskIndex === -1) {
        throw new AppError(404, "Task ID not found");
    }
    dataBase.splice(taskIndex, 1)
    return
}

export default deleteTaskServices