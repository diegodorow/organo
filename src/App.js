import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Safetycred",
      cor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      nome: "Lab",
      cor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Score",
      cor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Infra",
      cor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "Movti",
      cor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Dados",
      cor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação",
      cor: "#FFEEDF",
    },
  ]);

  function deletarColaborador(id) {
    console.log("id: ", id);
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />

      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          id={time.id}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
