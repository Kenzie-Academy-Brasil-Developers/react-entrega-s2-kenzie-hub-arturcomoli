import styled from "styled-components";

export const StyledLi = styled.li`
  width: 100%;
  background-color: var(--grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  transition: 0.5s;
  margin: 8px 0;
  cursor: pointer;

  p {
    color: var(--grey-0);
  }

  :hover {
    background-color: var(--grey-2);
    color: var(--grey-0);
  }
`;
