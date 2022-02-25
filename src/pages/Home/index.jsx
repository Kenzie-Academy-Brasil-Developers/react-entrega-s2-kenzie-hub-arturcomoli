import BackgroundSection from "../../components/BackgroundSection";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import ContainerHome from "../../components/ContainerHome";
import ContainerTecnologies from "../../components/ContainerTecnologies";
import Card from "../../components/Card";
import ExplodedBorder from "../../components/ExplodedBorder";
import TechModal from "../../components/TechModal";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Home = ({ auth, setAuth }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  if (!auth) {
    return <Redirect to="/" />;
  }

  const handleLogout = () => {
    localStorage.clear("@KenzieHub:token");
    setAuth(false);
    history.pushState("/");
  };

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <BackgroundSection>
      <TechModal show={show} onClick={handleModal} />
      <Container home>
        <Header children="Sair" onClick={handleLogout} />
        <ExplodedBorder>
          <Presentation />
        </ExplodedBorder>
        <ContainerHome onClick={handleModal} />
        <ContainerTecnologies>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerTecnologies>
      </Container>
    </BackgroundSection>
  );
};

export default Home;
