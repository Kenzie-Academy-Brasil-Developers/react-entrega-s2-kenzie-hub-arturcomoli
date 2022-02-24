import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 3px;

  h1 {
    color: var(--grey-0);
    margin-bottom: 8px;
  }

  button {
    margin-top: 5px;
  }

  span {
    font-size: 9px;
  }
`;
