import styled from "styled-components";
import { grey2, grey3, primary, primaryFocus } from "../../styles/global";

export const StyledButton = styled.button`
  width: ${(props) => (props.header ? "55px" : "100%")};
  height: ${(props) => props.header && "30px"};
  background-color: ${(props) => props.bgColor};

  border: 1px solid ${(props) => props.bgColor};

  transition: 0.5s;
  padding: ${(props) => (props.header ? "0" : "10px")};

  :hover {
    background-color: ${(props) =>
      props.bgColor === primary ? primaryFocus : grey2};
    border: 1px solid
      ${(props) => (props.bgColor === primary ? primaryFocus : grey2)};
  }
`;
