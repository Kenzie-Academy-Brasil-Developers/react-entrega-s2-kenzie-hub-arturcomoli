import styled from "styled-components";

export const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  h2 {
    color: var(--grey-0);
  }

  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    background-color: var(--grey-3);
    padding: 5px;
    transition: 0.5s;
  }

  div:hover {
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
  }

  svg {
    font-size: 10px;
    color: var(--grey-0);
  }
`;
