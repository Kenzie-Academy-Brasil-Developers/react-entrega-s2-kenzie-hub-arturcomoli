import { Container, InputContainer, HelperText } from "./styles";

const Input = ({ label, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer errored={!!error}>
        <input {...rest} />
      </InputContainer>
      <div>{!!error && <HelperText>{error}</HelperText>}</div>
    </Container>
  );
};

export default Input;
