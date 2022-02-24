import Button from "../Button";
import logo from "./Logo.svg";
import { grey3 } from "../../styles/global";
import { Container } from "./styles";

const Header = ({ login, ...rest }) => {
  return (
    <Container login={login}>
      <img src={logo} alt="" />
      {!login && <Button {...rest} bgColor={grey3} header />}
    </Container>
  );
};
export default Header;
