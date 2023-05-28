import { useContext, useEffect } from "react";
import { TaskContext } from "../../Context";
import { ITask } from "../../interfaces";
import CardTask from "./TaskCard"
import UlStyled from "./style"
import api from "../../services";

const TaskBoard: React.FC = () => {
    const { tasks, setTasks } = useContext(TaskContext)

    useEffect(() => {
        const requestTasks = async () => {
            try {
                const { data } = await api.get<ITask[]>('/tasks')
                setTasks(data)
            } catch (error) {
                console.log(error)
            }
        }
        requestTasks()
    }, [setTasks]);

    return (
        <UlStyled>
            {
                tasks.map((task: ITask) => (
                    <CardTask task={task} key={task.id} />
                ))
            }
        </UlStyled>
    )
}

export default TaskBoard