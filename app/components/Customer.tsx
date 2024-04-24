import React from 'react'
import { ICustomer } from '../types/customer';

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
            <div className="text-sm opacity-50">{customer.lastName}</div>
          </div>
        </div>
      </td>
      <td>
        {customer.email}
        <br />
        <span className="badge badge-ghost badge-sm">{customer.phone}</span>
      </td>
      <td>{customer.status}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{customer.type.type}</button>
      </th>
    </tr>
  );
}

export default Customer
