import { Container, InputContainer, HelperText } from "./styles";

const TechModalSelect = ({ register, name, label, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer errored={!!error}>
        <select {...rest} name={name} {...register(name)}>
          <option value="">Escolha um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Terceiro Módulo</option>
        </select>
      </InputContainer>
      <div>{!!error && <HelperText>{error}</HelperText>}</div>
    </Container>
  );
};

export default TechModalSelect;
