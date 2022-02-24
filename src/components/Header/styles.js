import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: ${(props) => (props.login ? "center" : "space-between")};
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  background-color: var(--grey-4);
`;
