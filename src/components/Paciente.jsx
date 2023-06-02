const Paciente = ({ paciente }) => {
    const { nombre, propietario, email, fecha, Sintomas } = paciente;
    return (
        // <div className="mt-16">
            <div className=" bg-white mt-3 shadow-md px-5 py-10 rounded-md mr-8 ">
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
            </div>
        // </div>
    );
};

export default Paciente;
