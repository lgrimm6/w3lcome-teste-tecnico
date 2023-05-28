import styled from "styled-components";

const ModalStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 9999;

  .modalRef {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 80vw;
    max-width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--grey-1);

    opacity: 0; 
    animation-duration: 0.3s; 
    animation-timing-function: ease;

    &.open {
      animation-name: fade-in; 
      opacity: 1;
    }

    &.close{
      animation-name: fade-off; 
      opacity: 0;
    }

    .headerModal{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px 0 15px;
      height: 50px;
      h4{
        font-size: 18px;
      }
      .closeModal {
      height: 28px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      svg {
        path {
          color: var(--color-grey-4);
          &:hover {
            color: var(--color-grey-0);
          }
        }
      }
    }
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-off {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default ModalStyled;
