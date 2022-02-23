import { StyledButton } from "../Button/styles";
import styled from "styled-components";
import { primaryNegative } from "../../styles/global";

export const StyledButtonNegative = styled(StyledButton)`
  background-color: ${primaryNegative};
  border: 1px solid ${primaryNegative};

  :hover {
    background-color: ${primaryNegative};
    border: 1px solid ${primaryNegative};
  }
`;
