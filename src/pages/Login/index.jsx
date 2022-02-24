import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import BackgroundSection from "../../components/BackgroundSection";
import { primary, grey1 } from "../../styles/global";
import Form from "../../components/Form";
import Container from "../../components/Container";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <BackgroundSection>
      <Container>
        <Header login />
        <Form>
          <h1>Login</h1>
          <Input label="E-mail" />
          <Input label="Senha" />
          <Button children="Entrar" bgColor={primary} />
          <Link to="/register">Ainda não possui uma conta?</Link>
          <Button children="Cadastre-se" bgColor={grey1} />
        </Form>
      </Container>
    </BackgroundSection>
    // <Button children="Teste" bgColor={grey1} isDisabled />
    // <ButtonNegative children="teste" />
    // <Input placeholder="teste" />
  );
};

export default Login;
