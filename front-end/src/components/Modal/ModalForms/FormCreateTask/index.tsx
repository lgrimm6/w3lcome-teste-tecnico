import { useContext } from 'react'
import { TaskContext } from '../../../../Context'
import { FieldValues, useForm } from "react-hook-form"
import { ITask } from '../../../../interfaces'

import api from '../../../../services'
import Input from '../../../InputLabel'
import FormStyled from '../style'

const FormCreateTask: React.FC = () => {
    const { register, handleSubmit } = useForm<FieldValues>()
    const { setIsOpenModalCreate, setTasks, tasks } = useContext(TaskContext)

    const submit = (formData: FieldValues) => {
        requestCreateTask(formData)
    }

    const requestCreateTask = async (data: FieldValues) => {
        try {
            const res = await api.post<ITask>('/tasks', data)
            setTasks([...tasks, res.data])
            setIsOpenModalCreate(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormStyled onSubmit={handleSubmit(submit)}>
            <Input label="Titulo: " placeholder="Informe um titulo" name="titulo" register={register} />
            <button className="buttonSubmitTask">Criar</button>
        </FormStyled>
    )
}

export default FormCreateTask