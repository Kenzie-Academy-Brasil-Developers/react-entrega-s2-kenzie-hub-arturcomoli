import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  border-radius: 3px;
  box-shadow: var(--shadow);

  h1 {
    color: var(--grey-0);
    margin-bottom: 8px;
  }

  button {
    margin: 15px 0 10px 0;
    font-size: 13px;
    font-weight: 500;
  }

  span {
    font-size: 9px;
  }

  p {
    margin: 10px 0 10px 0;
    color: var(--grey-1);
    font-size: 12px;
    line-height: 18px;
    transition: 0.5s;
  }

  label {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    /* padding: 30px 20px; */
    h1 {
      font-size: 18px;
    }
    span {
      font-size: 12px;
    }
  }
`;
