import { useState } from "react";
import DetailsModal from "../DetailsModal";
import { StyledLi } from "./styles";

const Card = ({ status, title, id, setTest, token }) => {
  const [pop, setPop] = useState(false);
  const handlePop = () => {
    setPop(!pop);
  };
  return (
    <>
      <DetailsModal
        token={token}
        onClick={handlePop}
        show={pop}
        title={title}
        setTest={setTest}
        id={id}
      />
      <StyledLi onClick={handlePop}>
        <p>{title}</p>
        <span>{status}</span>
      </StyledLi>
    </>
  );
};

export default Card;
