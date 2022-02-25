import styled from "styled-components";
import { grey3 } from "../../styles/global";

export const DivContainer = styled.div`
  width: 90%;
  max-width: ${(props) => (!props.home ? "320px" : "800px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (!props.home ? grey3 : "transparent")};
`;
