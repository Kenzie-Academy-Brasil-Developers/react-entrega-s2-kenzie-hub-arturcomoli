import { Container, InputContainer, HelperText } from "./styles";

const Input = ({ label, error, name, register, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer errored={!!error}>
        <input {...rest} name={name} {...register(name)} />
      </InputContainer>
      <div>{!!error && <HelperText>{error}</HelperText>}</div>
    </Container>
  );
};

export default Input;
