import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  border-radius: 3px;
  box-shadow: var(--shadow);

  h1 {
    color: var(--grey-0);
    margin-bottom: 8px;
  }

  button {
    margin: 5px 0 15px 0;
  }

  span {
    font-size: 9px;
  }

  a {
    margin: 10px 0 10px 0;
    color: var(--grey-1);
    font-size: 12px;
    line-height: 18px;
    transition: 0.5s;
  }

  a:hover {
    color: var(--grey-2);
  }
`;
