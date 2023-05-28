import { useContext } from "react"

import { BsPlusSquare } from "react-icons/bs"
import { TaskContext } from "../../../Context"
import ContainerHeaderMain from "./style"

const HeaderMain: React.FC = () => {
    const { setIsOpenModalCreate } = useContext(TaskContext)
    return (
        <ContainerHeaderMain>
            <div className="divTitleH2">
                <h2 className='heading-2-600'>Lista de tarefas</h2>
            </div>
            <button onClick={() => {
                setIsOpenModalCreate(true)
            }}>
                <BsPlusSquare size={24} />
            </button>
        </ContainerHeaderMain>
    )
}


export default HeaderMain