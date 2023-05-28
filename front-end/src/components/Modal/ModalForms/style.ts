import styled from "styled-components";

const FormStyled = styled.form`
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    background-color: var(--grey-0);
    
    .buttonSubmitTask{
        border: none;
        height: 30px;
        width: 50px;
    }
`


export default FormStyled