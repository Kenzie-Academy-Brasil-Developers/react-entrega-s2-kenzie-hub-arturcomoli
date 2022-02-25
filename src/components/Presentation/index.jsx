import { StyledDiv } from "./styles";

const Presentation = ({ userData }) => {
  const { name, course_module } = userData;
  return (
    <StyledDiv>
      <h1>Olá, {name}</h1>
      <p>{course_module}</p>
    </StyledDiv>
  );
};

export default Presentation;
