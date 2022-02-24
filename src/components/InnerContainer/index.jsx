import { Container } from "./styles";

const InnerContainer = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default InnerContainer;
