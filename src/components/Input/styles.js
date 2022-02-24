import styled, { css } from "styled-components";
import { grey0, grey2, Negative } from "../../styles/global";

export const Container = styled.div`
  text-align: left;
  width: ${(props) => (props.pword ? "48%" : "100%")};
`;

export const InputContainer = styled.div`
  margin: 8px 0 0px 0;
  display: flex;
  border-radius: 4px;
  /* padding-left: 16px; */
  padding: 4px 0 4px 16px;
  background-color: ${grey2};
  width: 100%;
  border: 1px solid ${grey2};
  transition: 0.5s;

  ${(props) =>
    props.error &&
    css`
      border-color: ${Negative};
    `}

  :focus-within {
    border: 1px solid ${grey0};
    input::placeholder {
      color: ${grey0};
    }
    ${(props) =>
      props.errored &&
      css`
        border-color: ${Negative};
      `}
  }

  input {
    align-items: center;
    /* flex: ${(props) => (!props.pword ? "1" : "0")}; */
    flex: 1;
    width: ${(props) => props.pword && "100%"};
  }
`;

export const ErrorsContainer = styled.div`
  /* height: 13px; */
`;

export const HelperText = styled.span`
  font-size: 9px;
  color: ${Negative};
  line-height: 15px;
`;
