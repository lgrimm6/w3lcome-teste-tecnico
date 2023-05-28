import TaskBoard from "../TaskBoard"
import HeaderMain from "./HeaderMain"
import MainStyled from "./style"

const Main: React.FC = () => {

    return (
        <MainStyled>
            <HeaderMain />
            <TaskBoard />
        </MainStyled>
    )
}

export default Main