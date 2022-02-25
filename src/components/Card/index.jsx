import { StyledLi } from "./styles";

const Card = ({ status, title }) => {
  return (
    <StyledLi>
      <p>{title}</p>
      <span>{status}</span>
    </StyledLi>
  );
};

export default Card;
