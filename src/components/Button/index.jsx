import { StyledButton } from "./styles";

const Button = ({ bgColor, header, ...rest }) => {
  return <StyledButton {...rest} bgColor={bgColor} header={header} />;
};

export default Button;
