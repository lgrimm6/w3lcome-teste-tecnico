export interface ITask {
    id: number
    titulo: string
    concluida: boolean
}

export type ITaskCreate = Pick<ITask, "titulo">

export interface ITaskUpdate{
    titulo?: string 
    concluida?: boolean 
}