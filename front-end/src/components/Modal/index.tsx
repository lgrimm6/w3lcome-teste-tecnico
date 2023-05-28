import ModalStyled from "./style";
import { AiOutlineClose } from "react-icons/ai";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useRef,
} from "react";

interface IModalProps {
    children: ReactNode;
    nameModal: string;
    isOpenModal: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<IModalProps> = ({ children, nameModal, isOpenModal, setIsOpenModal }) => {

    const modalUseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleCloseModal(event: Event) {
            const target = event.target instanceof Node ? event.target : null;
            if (target && !modalUseRef.current?.contains(target)) {
                modalUseRef.current?.classList.add("close")
                setTimeout(() => {
                    setIsOpenModal(false);
                }, 200)
            }
        }
        document.addEventListener("mousedown", handleCloseModal);
        return () => {
            document.removeEventListener("mousedown", handleCloseModal);
        };
    }, [isOpenModal]);

    return (
        <ModalStyled>
            <div ref={modalUseRef} className={`modalRef ${isOpenModal && "open"}`} >
                <div className="headerModal">
                    <h4 className="heading-4-600">{nameModal}</h4>
                    <button className="closeModal" onClick={() => {
                        modalUseRef.current?.classList.add("close")
                        setTimeout(() => {
                            setIsOpenModal(false);
                        }, 200)
                    }}>
                        <AiOutlineClose size={18} />
                    </button>
                </div>
                {children}
            </div>
        </ModalStyled>
    );
}

export default Modal;
