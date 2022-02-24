import BackgroundSection from "../../components/BackgroundSection";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import ContainerHome from "../../components/ContainerHome";
import ContainerTecnologies from "../../components/ContainerTecnologies";
import Card from "../../components/Card";
import ExplodedBorder from "../../components/ExplodedBorder";

const Home = () => {
  return (
    <BackgroundSection>
      <Container home>
        <Header children="Sair" />
        <ExplodedBorder>
          <Presentation />
        </ExplodedBorder>
        <ContainerHome />
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
