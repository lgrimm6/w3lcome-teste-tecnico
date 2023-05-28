export interface ITask {
    id: string
    titulo: string
    concluida: boolean
}

export type ITaskCreate = Pick<ITask, "titulo">

export interface ITaskUpdate{
    titulo?: string 
    concluida?: boolean 
}