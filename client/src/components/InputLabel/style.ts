import styled from "styled-components";

const InputLabelStyled = styled.label`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    height: 30px;
    width: 100%;
    padding: 5px;
    font-size: 16px;
    margin-top: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
  span {
    margin-left: 1rem;
  }
`;

export default InputLabelStyled;
