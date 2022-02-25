import { Container, InputContainer, HelperText } from "./styles";

const Select = ({ modal, register, name, label, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer errored={!!error}>
        <select {...rest} name={name} {...register(name)} modal>
          <option value="">Escolha um Módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
      </InputContainer>
      <div>{!!error && <HelperText>{error}</HelperText>}</div>
    </Container>
  );
};

export default Select;
