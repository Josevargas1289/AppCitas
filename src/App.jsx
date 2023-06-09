import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const arrayPacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(arrayPacienteActualizado);
  }


  return (
    <div className="container m-10 ">
      <Header />
      <div className="mt-12 md:flex ">
        <Form 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente = {paciente} 
        setPaciente = {setPaciente}
        />
        <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
