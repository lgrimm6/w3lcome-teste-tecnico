import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    }


    :root{
        
    --color-primary: #DD8A0D;
    --color-secondary:#ff9900;

    --grey-0:#E3E3E3;
    --grey-1:#868e96;
    --grey-2:#343b41;
    --grey-3:#212529;
    --grey-4: #121214;

    --sucess: #3FE864;
    --negative: #e83f5b;

    background-color: #D9D9D9;

    .heading-1-700 {
        font-family: 'Bai Jamjuree', sans-serif;
        font-size: 2rem;
        font-weight:700;
        color: var(--color-primary)
    };

    .heading-2-600 {
        font-family: 'Bai Jamjuree', sans-serif;
        text-align: center;
        font-size: 1.6rem;
        font-weight:600;
        color: var(--color-primary);
     };

     .heading-4-600  {
        font-family: 'Bai Jamjuree', sans-serif;
        font-size: 1.2rem;
        font-weight:600;
        color: var(--color-secondary)

     };

    .heading-5-500  {
        font-family: 'Bai Jamjuree', sans-serif;
        font-size: 1rem;
        font-weight:500;
        color: var(--color-grey-1)

    };

     .input-label {
        font-family: 'Bai Jamjuree', sans-serif;
        font-size: 1rem;
        font-weight:500;
        color: var(--color-grey-2)
     };
    }

    body{
        width: 100%;
        height: 100vh;
    };

    button{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
                
                background-color: var(--grey-1);
                color: white;
                transition: all 0.3s ease
            }
    }
    

`