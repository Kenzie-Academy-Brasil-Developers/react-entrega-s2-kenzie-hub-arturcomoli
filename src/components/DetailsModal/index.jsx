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
import api from "../../services/api";
import { toast } from "react-toastify";

const DetailsModal = ({ setTest, id, title, token, show, ...rest }) => {
  const formSchema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleDelete = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia deletada com sucesso!");
        setTest([]);
      })
      .catch((err) => toast.error("Ops, algo deu errado!"));
  };

  return (
    <ModalBackground show={show}>
      <Container>
        <TechModalHeader>
          <h3>Detalhes da Tecnologia</h3>
          <AiOutlineClose {...rest} />
        </TechModalHeader>
        <Form onSubmit={handleSubmit(handleDelete)}>
          <Input
            disabled
            placeholder={title}
            label="Nome da Tecnologia"
            name="title"
            register={register}
            error={errors.title?.message}
          />
          <TechModalSelect
            label="Status"
            disabled
            register={register}
            name="status"
            error={errors.status?.message}
          />
          <Button bgColor={primary} children="Deletar" type="submit" />
        </Form>
      </Container>
    </ModalBackground>
  );
};

export default DetailsModal;
