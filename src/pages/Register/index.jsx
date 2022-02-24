import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Form from "../../components/Form";
import BackgroundSection from "../../components/BackgroundSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { primaryNegative } from "../../styles/global";

const Register = () => {
  return (
    <BackgroundSection>
      <Container>
        <Header children="Voltar" />
        <Form>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
          <Input label="Nome" />
          <Input label="E-mail" />
          <Input label="Senha" />
          <Input label="Confirmar Senha" />
          <Select label="Selecionar Módulo" />
          <Button children="Cadastrar" bgColor={primaryNegative} />
        </Form>
      </Container>
    </BackgroundSection>
  );
};
export default Register;
