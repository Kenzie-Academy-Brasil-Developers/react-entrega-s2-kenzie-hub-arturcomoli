import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-3);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 33px 17px;
  border-radius: 3px;

  h1 {
    color: var(--grey-0);
    margin-bottom: 30px;
  }

  button {
    margin-top: 5px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
