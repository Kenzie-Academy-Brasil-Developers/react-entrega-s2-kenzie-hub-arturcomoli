import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 35px 0;

  h1 {
    color: var(--grey-0);
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
