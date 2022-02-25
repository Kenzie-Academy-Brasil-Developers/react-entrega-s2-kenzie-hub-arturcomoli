import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 100%;
  background-color: var(--grey-3);
  padding: 14px 18px;
  max-height: 250px;
  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: var(--grey-1);
  }

  ::-webkit-scrollbar {
    width: 7px;
    background: var(--grey-1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grey-2);
  }

  @media screen and (min-width: 900px) {
    max-height: 350px;
  }
`;
