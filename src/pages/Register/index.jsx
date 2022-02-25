import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Form from "../../components/Form";
import BackgroundSection from "../../components/BackgroundSection";
import { PasswordContainer } from "./styles";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { primaryNegative, primary } from "../../styles/global";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Register = ({ auth }) => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min([6], "Mínimo de 6 caracteres"),
    password_confirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Validação incorreta"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const backToLogin = () => {
    history.push("/");
  };

  if (auth) {
    return <Redirect to="/home" />;
  }

  const handleRegister = (data) => {
    delete data.password_confirm;
    api.post("/users", data).catch((err) => {
      toast.error("Algo deu errado, cheque as credenciais");
    });
    toast.success("Usuário cadastrado com sucesso!");
    history.push("/");
  };

  return (
    <BackgroundSection>
      <Container>
        <Header children="Voltar" onClick={backToLogin} />
        <Form onSubmit={handleSubmit(handleRegister)}>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>

          <Input
            label="Nome"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            label="E-mail"
            name="email"
            register={register}
            error={errors.email?.message}
          />

          <PasswordContainer>
            <Input
              pword
              type="password"
              label="Senha"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              pword
              type="password"
              label="Confirmar Senha"
              name="password_confirm"
              register={register}
              error={errors.password_confirm?.message}
            />
          </PasswordContainer>
          <Input
            label="Bio (um pouco sobre você)"
            name="bio"
            register={register}
            error={errors.bio?.message}
          />

          <PasswordContainer>
            <Input
              pword
              label="Contato"
              name="contact"
              register={register}
              error={errors.contact?.message}
            />

            <Select
              label="Selecionar Módulo"
              name="course_module"
              register={register}
              error={errors.course_module?.message}
            />
          </PasswordContainer>
          {Object.keys(errors).length !== 0 ? (
            <Button children="Entrar" bgColor={primaryNegative} type="submit" />
          ) : (
            <Button children="Entrar" bgColor={primary} type="submit" />
          )}
        </Form>
      </Container>
    </BackgroundSection>
  );
};
export default Register;
