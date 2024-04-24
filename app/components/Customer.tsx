import React from 'react'
import { ICustomer } from '../types/customer';
import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";

interface CustomerProps {
  customer: ICustomer;
}

const Customer:React.FC<CustomerProps> = ({customer}) => {
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
          <FaUserEdit className="text-warning" size={20} />
          <FaUserMinus className="text-error" size={20} />
        </div>
      </td>
    </tr>
  );
}

export default Customer
