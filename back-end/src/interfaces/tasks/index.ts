export interface ITask {
    id: number
    titulo: string
    concluida: boolean
}

export type ITaskBodyRequest = Pick<ITask, "titulo">