import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-3);

  a {
    color: var(--grey-1);
    font-size: 12px;
    line-height: 18px;
    transition: 0.5s;
  }

  a:hover {
    color: var(--grey-2);
  }

  button {
    margin: 17px 0 33px 0;
  }
`;
