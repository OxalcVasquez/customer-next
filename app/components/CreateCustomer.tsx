'use client'
import React, { FormEventHandler, useEffect, useState } from "react";
import { RiUserAddFill } from "react-icons/ri";
import Modal from "./Modal";
import { IType } from "../types/type";
import { getAllTypeCustomers } from "../api/type-customer";

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

  const handleSubmitCreateCustomer: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    clearFields()
  };

  const clearFields = ()  => {
      setNombres("");
      setApellidos("");
      setTelefono("");
      setEstado(true);
      setTipoCliente({ id: 0, type: "" });
  }

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
    </div>
  );
};
export default CreateCustomer;
