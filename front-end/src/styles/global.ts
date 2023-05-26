import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --color-primary: #DD8A0D;
    --color-secondary: #041DFE;


    --grey-0:#E3E3E3;
    --grey-1:#868e96;
    --grey-2:#343b41;
    --grey-3:#212529;
    --grey-4: #121214;

    --sucess: #3FE864;
    --negative: #e83f5b;

    background-color: #D9D9D9;
    

    
}

    body{
        width: 100%;
        height: 100vh;
    };
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    }

`