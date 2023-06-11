import swal from 'sweetalert';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, Sintomas, id } = paciente;


    // importante funcion, no perderla, sirve para eliminar y mostrar alertas
    const handleEliminar = ()=>{
        swal
        ({
          title: "Desea eliminar el paciente?",
          text: "El paciente eliminado no podra ser recuperado!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .
        then
        ((willDelete) => {
          if (willDelete) {
            
        swal
        ("Paciente eliminado del sistema", {
              icon: "success",
              
            });
            setTimeout(() => {
                eliminarPaciente(id)
            }, 1000);
          
          } else {
            
        swal
        ("No se eliminara la informacion!");
          }
        });
    }
    // console.log(swal);

    return (
    
            <div className=" bg-white mt-3 shadow-md px-5 py-10 rounded-md  ">
                <p className=" font-bold mb-3 text-gray-700 uppercase">
                    Nombre: <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className=" font-bold mb-3 text-gray-700 uppercase">
                    Propietario:{" "}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className=" font-bold mb-3 text-gray-700 uppercase">
                    Email: <span className="font-normal normal-case">{email}</span>
                </p>

                <p className=" font-bold mb-3 text-gray-700 uppercase">
                    Fecha de alta:{" "}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className=" font-bold mb-3 text-gray-700 uppercase">
                    Sintomas:{" "}
                    <span className="font-normal normal-case mb-10">{Sintomas}</span>
                </p>
                <div className="flex justify-between mt-10 ">
                    <button
                    type="button"
                    className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg "
                    onClick={()=>setPaciente(paciente)}
                    >
                        Editar

                    </button>

                    <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}

                    >
                        Eliminar

                    </button>
                </div>
            </div>
        
    );
};

export default Paciente;
