import { useContext } from "react";
import { TaskContext } from "../../Context";
import Modal from "../../components/Modal";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import FormCreateTask from "../../components/Modal/ModalForms/FormCreateTask";
import FormEditTask from "../../components/Modal/ModalForms/FormEditTask";

const HomePage = () => {
    const {
        isOpenModalCreate,
        setIsOpenModalCreate,
        isOpenModalEdit,
        setIsOpenModalEdit
    } = useContext(TaskContext);

    return (
        <>
            {isOpenModalCreate &&
                <Modal
                    isOpenModal={isOpenModalCreate}
                    setIsOpenModal={setIsOpenModalCreate}
                    nameModal={"Nova Tarefa"}
                >
                    <FormCreateTask />
                </Modal>}
            {isOpenModalEdit &&
                <Modal
                    isOpenModal={isOpenModalEdit}
                    setIsOpenModal={setIsOpenModalEdit}
                    nameModal={"Editar Tarefa"}
                >
                    <FormEditTask />
                </Modal>}
            <Header />
            <Main />
            <Footer />
        </>
    )
}


export default HomePage