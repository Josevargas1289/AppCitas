
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {


 

  return (
    <div className="md:w-3/5  lg:w-3/5  md:h-screen overflow-y-scroll  mt-8 lg:mr-14 mr-20 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-16">
            Listado pacientes
          </h2>
          <p className="text-lg mt-16 mb-6 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} 
            setPaciente ={setPaciente}
            eliminarPaciente = {eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center mb-16">
            No hay pacientes
          </h2>
          <p className="text-lg mt-16 mb-6 text-center">
            Agrega pacientes{" "}
            <span className="text-indigo-600 font-bold">Se mostraran aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
