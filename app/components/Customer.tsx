'use client'
import React, { FormEvent, FormEventHandler, useState } from 'react'
import { ICustomer, ICustomerUpdate } from '../types/customer';
import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";
import Modal from './Modal';
import { IType } from '../types/type';
import { updateCustomer } from '../api/customer-service';
import { useRouter } from 'next/navigation';


interface CustomerProps {
  customer: ICustomer;
  types : IType[];
}

const Customer:React.FC<CustomerProps> = ({customer, types}) => {

  const [openModalEdit, setModalEdit] = useState<boolean>(false)
  const [openModalDelete, setModalDelete] = useState<boolean>(false);
  const [nombres, setNombres] = useState(customer.name);
  const [apellidos, setApellidos] = useState(customer.last_name);
  const [correo, setCorreo] = useState(customer.email);
  const [telefono, setTelefono] = useState(customer.phone);
  const [tipoCliente, setTipoCliente] = useState({ id: customer.type.id, type: customer.type.type });
  const [estado, setEstado] = useState(customer.status);
  const router = useRouter();

  const handleSubmitUpdateCustomer:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await updateCustomer({
      id: customer.id,
      name: nombres,
      last_name: apellidos,
      email: correo,
      phone: telefono,
      status: estado,
      type_id: tipoCliente.id,
    });
    router.refresh();
    setModalEdit(false);
  }
  return (
    <tr key={customer.id}>
      <td>
        <div className="flex items-center gap-3">
          {/* <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="" />
                      </div>
                    </div> */}
          <div>
            <div className="font-bold">{customer.name}</div>
            <div className="text-sm opacity-50">{customer.last_name}</div>
          </div>
        </div>
      </td>
      <td>
        {customer.email}
        <br />
        <span className="badge badge-ghost badge-sm">{customer.phone}</span>
      </td>
      <td>
        {customer.status ? (
          <FaUserCheck className="text-success" />
        ) : (
          <FaUserXmark className="text-ghost" />
        )}
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">{customer.type.type}</button>
      </td>
      <td>
        <div className="flex flex-row gap-4">
          <FaUserEdit className="text-warning" cursor="pointer" size={20} onClick={() => setModalEdit(true)} />
          <Modal modalOpen={openModalEdit} setModalOpen={setModalEdit}>
            <form onSubmit={handleSubmitUpdateCustomer}>
              <h3 className="font-bold text-lg">Actualizar cliente</h3>
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
                  Actualizar cliente
                </button>
              </div>
            </form>
          </Modal>
          <FaUserMinus className="text-error" cursor="pointer" size={20} />
        </div>
      </td>
    </tr>
  );
}

export default Customer
