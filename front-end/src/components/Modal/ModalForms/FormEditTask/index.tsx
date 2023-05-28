import { useContext } from 'react'
import { TaskContext } from '../../../../Context'
import { FieldValues, useForm } from "react-hook-form"
import { ITask } from '../../../../interfaces'

import api from '../../../../services'
import Input from '../../../InputLabel'
import FormStyled from '../style'

const FormEditTask: React.FC = () => {
    const { setIsOpenModalEdit, tasks, currentTask, setTasks } = useContext(TaskContext)
    const { register, handleSubmit } = useForm<FieldValues>()
    const submit = (formData: FieldValues) => {
        requestEditTask(formData, currentTask.id)
    }
    const requestEditTask = async (data: FieldValues, id: string) => {
        try {
            const res = await api.patch<ITask>(`/tasks/${id}`, data)
            setTasks(tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        ...res.data,
                    };
                }
                return task;
            }));
            setIsOpenModalEdit(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormStyled onSubmit={handleSubmit(submit)}>
            <Input
                label="Titulo: "
                placeholder="Informe um titulo"
                name="titulo"
                register={register}
                defaultValue={currentTask.titulo}
            />
            <button className="buttonSubmitTask">Editar</button>
        </FormStyled>
    )
}

export default FormEditTask