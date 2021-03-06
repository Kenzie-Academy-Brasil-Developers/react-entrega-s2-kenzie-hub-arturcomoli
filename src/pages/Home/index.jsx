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
import { useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import BackgroundAnimation from "../../components/BackgroundAnimation";

const Home = ({ auth, setAuth }) => {
  const [test, setTest] = useState([]);
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const [userData, setUserData] = useState({});
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));

  useEffect(() => {
    async function getTechnologies() {
      const response = await api
        .get(`/users/${id}`)
        .catch((err) =>
          toast.error(
            "Algo deu errado! Verifique se você está autorizado para tal ação."
          )
        );
      setTechs(response.data.techs);
      setUserData(response.data);
    }
    getTechnologies();
  }, [test]);

  if (!auth) {
    return <Redirect to="/" />;
  }

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    localStorage.clear();
    localStorage.clear();
    setAuth(false);
    history.push("/");
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <BackgroundAnimation>
      <BackgroundSection>
        <TechModal
          modal={modal}
          onClick={handleModal}
          token={token}
          setTest={setTest}
        />
        <Container home>
          <Header children="Sair" onClick={handleLogout} />
          <ExplodedBorder>
            <Presentation userData={userData} />
          </ExplodedBorder>
          <ContainerHome onClick={handleModal} />
          <ContainerTecnologies>
            {techs.map(({ status, title, id }) => {
              return (
                <Card
                  token={token}
                  status={status}
                  title={title}
                  key={id}
                  id={id}
                  setTest={setTest}
                />
              );
            })}
          </ContainerTecnologies>
        </Container>
      </BackgroundSection>
    </BackgroundAnimation>
  );
};

export default Home;
