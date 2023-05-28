import { Dispatch, SetStateAction, ReactNode, createContext, useState } from "react";
import { ITask } from "../interfaces";

interface ITaskContext {
    tasks: ITask[]
    setTasks: Dispatch<SetStateAction<ITask[]>>
    currentTask: ITask
    setCurrentTask: Dispatch<SetStateAction<ITask>>
    isOpenModalCreate: boolean
    setIsOpenModalCreate: Dispatch<SetStateAction<boolean>>
    isOpenModalEdit: boolean
    setIsOpenModalEdit: Dispatch<SetStateAction<boolean>>
}

interface ITaskProvider {
    children: ReactNode
}

export const TaskContext = createContext({} as ITaskContext)


export const TaskProvider = ({ children }: ITaskProvider) => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [currentTask, setCurrentTask] = useState<ITask>({} as ITask)
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false)
    const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)
    return (
        <TaskContext.Provider value={{
            tasks,
            setTasks,
            currentTask,
            setCurrentTask,
            isOpenModalCreate,
            setIsOpenModalCreate,
            setIsOpenModalEdit,
            isOpenModalEdit
        }
        }>{children}</TaskContext.Provider>)
}