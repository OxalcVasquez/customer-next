'use client'
import React, { FormEventHandler, useEffect, useState } from "react";
import { RiUserAddFill } from "react-icons/ri";
import Modal from "./Modal";
import { IType } from "../types/type";
import { getAllTypeCustomers } from "../api/type-customer";
import { createCustomer } from "../api/customer-service";
import { useRouter } from "next/navigation";
import Alert from "./Alert";
import { showAlert } from "../utils/helper";

interface CreateCustomerProps {
  types: IType[];
}

export const CreateCustomer: React.FC<CreateCustomerProps> = ({types}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoCliente, setTipoCliente] = useState({ id: 0, type: "" });
  const [estado, setEstado] = useState(true);
  const [showAlertWarning, setshowAlertWarning] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const router = useRouter();

  const handleSubmitCreateCustomer: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (validateFields()){
      setshowAlertWarning(false);
       const newCustomer = await createCustomer({
       name: nombres,
       last_name: apellidos,
       email: correo,
       phone: telefono,
       status: estado,
       type_id: tipoCliente.id,
     });
       if (newCustomer === null) {
        showAlert(setShowAlertError);
       } else {
        showAlert(setShowAlertSuccess);
       }
    } else {
        showAlert(setshowAlertWarning);

    }


    setModalOpen(false);
    router.refresh();
    clearFields();
  };

  const clearFields = ()  => {
      setNombres("");
      setApellidos("");
      setCorreo("");
      setTelefono("");
      setEstado(true);
      setTipoCliente({ id: 0, type: "" });
  }

  const validateFields = () => {
    return nombres !== "" && apellidos !== "" && correo !== "";
  };

  return (
    <div className="">
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Registrar nuevo cliente <RiUserAddFill className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitCreateCustomer}>
          <h3 className="font-bold text-lg">Registrar nuevo cliente</h3>
          <div className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Nombres"
              className="input input-bordered w-full mb-4"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="input input-bordered w-full mb-4"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input
              type="text"
              placeholder="Correo"
              className="input input-bordered w-full mb-4"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="input input-bordered w-full mb-4"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <div className="flex-row flex items-center justify-between mb-5">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  {tipoCliente.type || "Seleccione un tipo de cliente"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {types.map((type) => (
                    <li key={type.id}>
                      <a
                        onClick={() =>
                          setTipoCliente({ id: type.id, type: type.type })
                        }
                      >
                        {type.type}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="form-control ">
                <label className="label cursor-pointer">
                  <span className="label-text ml-4">Estado</span>
                  <input
                    type="checkbox"
                    className="checkbox ml-4"
                    checked={estado}
                    onChange={(e) => setEstado(e.target.checked)}
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-active btn-primary w-full mt-5"
            >
              Registrar cliente
            </button>
          </div>
        </form>
      </Modal>
      <Alert
        showAlert={showAlertWarning}
        type="warning"
        message="Advertencia : Por favor completar los campos obligatorios!"
      />
      <Alert
        showAlert={showAlertError}
        type="error"
        message="Error: Sucedió un error creando al cliente"
      />
      <Alert
        showAlert={showAlertSuccess}
        type="success"
        message="Éxito: Cliente creado"
      />
    </div>
  );
};
export default CreateCustomer;
