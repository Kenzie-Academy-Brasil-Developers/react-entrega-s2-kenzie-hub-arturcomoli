import { Container, ModalBackground, TechModalHeader } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import Form from "../Form";
import Input from "../Input";
import TechModalSelect from "../TechModalSelect";
import Button from "../Button";
import { primary } from "../../styles/global";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const TechModal = ({ show, ...rest }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);
  const handleNewTech = (data) => {
    console.log(data);
  };

  return (
    <ModalBackground show={show}>
      <Container>
        <TechModalHeader>
          <h3>Cadastrar Tecnologia</h3>
          <AiOutlineClose {...rest} />
        </TechModalHeader>
        <Form onSubmit={handleSubmit(handleNewTech)}>
          <Input
            placeholder="Insira uma tecnologia"
            label="Nome"
            name="title"
            register={register}
            error={errors.title?.message}
          />
          <TechModalSelect
            register={register}
            name="status"
            error={errors.status?.message}
          />
          <Button bgColor={primary} children="Cadastrar" type="submit" />
        </Form>
      </Container>
    </ModalBackground>
  );
};

export default TechModal;
