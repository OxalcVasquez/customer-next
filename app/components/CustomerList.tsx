import React from "react";
import { ICustomer } from "../types/customer";
import Customer from "./Customer";
import { IType } from "../types/type";

interface CustomerListProps {
  customers: ICustomer[];
  types : IType[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, types}) => {
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
          <Customer key={customer.id} customer={customer} types={types} />
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
