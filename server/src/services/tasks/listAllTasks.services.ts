import dataBase from "../../database/index"
import { ITask } from "../../interfaces/tasks"

const listAllTasksServices = (): ITask[]=>{
    return dataBase
}

export default listAllTasksServices