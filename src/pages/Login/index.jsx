import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import BackgroundSection from "../../components/BackgroundSection";
import { primary, grey1, primaryNegative } from "../../styles/global";
import Form from "../../components/Form";
import Container from "../../components/Container";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min([6], "Sua senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  const redirectToRegistration = () => {
    history.push("/register");
  };

  return (
    <BackgroundSection>
      <Container>
        <Header login />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
          <Input
            label="E-mail"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            register={register}
            error={errors.password?.message}
          />

          {Object.keys(errors).length !== 0 ? (
            <Button children="Entrar" bgColor={primaryNegative} type="submit" />
          ) : (
            <Button children="Entrar" bgColor={primary} type="submit" />
          )}

          <p>Ainda não possui uma conta?</p>
          <Button
            children="Cadastre-se"
            bgColor={grey1}
            onClick={redirectToRegistration}
          />
        </Form>
      </Container>
    </BackgroundSection>
  );
};

export default Login;
