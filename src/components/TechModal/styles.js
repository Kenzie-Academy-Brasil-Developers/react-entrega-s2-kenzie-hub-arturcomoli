import styled from "styled-components";

export const ModalBackground = styled.div`
  z-index: auto;
  display: ${(props) => (props.modal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  background: var(--grey-3);
  width: 90%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  box-shadow: var(--shadow);

  @media screen and (min-width: 768px) {
    width: 33%;
    max-width: 300px;
  }
`;

export const TechModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 14px 20px;
  background-color: var(--grey-2);
  border-radius: 4px 4px 0 0;

  h3 {
    color: var(--grey-0);
    font-size: 12px;
  }

  svg {
    transition: 0.5s;
    cursor: pointer;
  }

  svg:hover {
    color: var(--grey-0);
  }
`;
