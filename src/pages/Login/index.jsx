import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { primary, grey1 } from "../../styles/global";
import { Container, Background, Form, InnerContainer } from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Background>
      <Container>
        <Header login />
        <Form>
          <h1>Login</h1>
          <Input label="E-mail" />
          <Input label="Senha" />
          <Button children="Entrar" bgColor={primary} />
        </Form>
        <InnerContainer>
          <Link to="/register">Ainda não possui uma conta?</Link>
          <Button children="Cadastre-se" bgColor={grey1} />
        </InnerContainer>
      </Container>
    </Background>
    // <Button children="Teste" bgColor={grey1} isDisabled />
    // <ButtonNegative children="teste" />
    // <Input placeholder="teste" />
  );
};

export default Login;
