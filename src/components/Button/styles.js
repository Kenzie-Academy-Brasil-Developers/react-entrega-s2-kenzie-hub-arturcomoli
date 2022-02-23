import styled from "styled-components";
import { grey2, primary, primaryFocus } from "../../styles/global";

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.bgColor};

  border: 1px solid ${(props) => props.bgColor};

  transition: 0.5s;
  padding: 10px;

  :hover {
    background-color: ${(props) =>
      props.bgColor === primary ? primaryFocus : grey2};
    border: 1px solid
      ${(props) => (props.bgColor === primary ? primaryFocus : grey2)};
  }
`;
