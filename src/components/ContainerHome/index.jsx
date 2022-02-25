import { StyledTitle } from "./styles";
import { BiPlus } from "react-icons/bi";

const ContainerHome = ({ ...rest }) => {
  return (
    <StyledTitle>
      <h2>Tecnologias</h2>
      <div>
        <BiPlus {...rest} />
      </div>
    </StyledTitle>
  );
};
export default ContainerHome;
