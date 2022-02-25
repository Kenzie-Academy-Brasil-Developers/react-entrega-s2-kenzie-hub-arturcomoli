import BackgroundSection from "../../components/BackgroundSection";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import ContainerHome from "../../components/ContainerHome";
import ContainerTecnologies from "../../components/ContainerTecnologies";
import Card from "../../components/Card";
import ExplodedBorder from "../../components/ExplodedBorder";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = ({ auth, setAuth }) => {
  const history = useHistory();

  if (!auth) {
    return <Redirect to="/" />;
  }

  const handleLogout = () => {
    localStorage.clear("@KenzieHub:token");
    setAuth(false);
    history.pushState("/");
  };

  return (
    <BackgroundSection>
      <Container home>
        <Header children="Sair" onClick={handleLogout} />
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
