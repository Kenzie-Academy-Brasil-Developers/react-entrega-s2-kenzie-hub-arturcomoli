import Button from "../Button";
import logo from "./Logo.svg";
import { grey1, grey2, grey3, primary } from "../../styles/global";
import { Container } from "./styles";

const Header = ({ login }) => {
  return (
    <Container>
      <img src={logo} alt="" />
      {!login && <Button children="Entrar" bgColor={grey3} header />}
    </Container>
  );
};
export default Header;
