import styled from "styled-components";

const LiStyled = styled.li`
    width: 95%;
    min-height: 80px;
    display: flex;
    padding: 0 10px 0 10px;
    align-items: center;
   

    .divButtonPine{
        width: 10%;
        .buttonPine{
            width: 25px;
            height: 25px;
            border-radius: 50% ;
            background-color: white;
            border: none;
            position: relative;
            svg{
                position: absolute;
                top: -7px;
                
            }
        }
    }

    .conteinerFlex{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .containerTitle{
            width: 100%;
            word-wrap: break-word;
            text-align: center;
            padding: 0 5px 0 10px;
        }
        .containerOptionsTask{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }
    }

    &.pending{
        background-color: #D9D9D9;
    }

    &.completed{
        background-color: var(--sucess);
    }

    &.delete {
        animation: fadeOut 0.5s;
        opacity: 0;
    }

    @media (min-width: 768px) { 
        padding: 0 20px 0 20px;
        .conteinerFlex{
        flex-direction: row;
        .containerTitle{
            text-align: left;
        }
        .containerOptionsTask{

        }
    }
    }


    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
`

export default LiStyled