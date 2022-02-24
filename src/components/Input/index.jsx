import {
  Container,
  InputContainer,
  HelperText,
  ErrorsContainer,
} from "./styles";

const Input = ({ label, error, name, register, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer errored={!!error}>
        <input {...rest} name={name} {...register(name)} />
      </InputContainer>
      <ErrorsContainer>
        <HelperText>{error}</HelperText>
      </ErrorsContainer>
    </Container>
  );
};

export default Input;
