import { StyledButton } from "./styles";

const Button = ({ bgColor, ...rest }) => {
  return <StyledButton {...rest} bgColor={bgColor} />;
};

export default Button;
