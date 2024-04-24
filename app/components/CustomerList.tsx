import React from "react";
import { ICustomer } from "../types/customer";

interface CustomerListProps {
  customers: ICustomer[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Nombres y apellidos</th>
            <th>Contacto</th>
            <th>Estado</th>
            <th>Tipo de cliente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.map((customer) => (
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
                    <div className="text-sm opacity-50">
                      {customer.lastName}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {customer.email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {customer.phone}
                </span>
              </td>
              <td>{customer.status}</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  {customer.typeId}
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Nombres y apellidos</th>
            <th>Contacto</th>
            <th>Estado</th>
            <th>Tipo de cliente</th>
            <th>Acciones</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CustomerList;
