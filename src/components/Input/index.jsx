import {
  Container,
  InputContainer,
  HelperText,
  ErrorsContainer,
} from "./styles";

const Input = ({ pword, label, error, name, register, ...rest }) => {
  return (
    <Container pword={pword}>
      <label>{label}</label>
      <InputContainer errored={!!error} pword={pword}>
        <input {...rest} name={name} {...register(name)} />
      </InputContainer>
      <ErrorsContainer>
        <HelperText>{error}</HelperText>
      </ErrorsContainer>
    </Container>
  );
};

export default Input;
