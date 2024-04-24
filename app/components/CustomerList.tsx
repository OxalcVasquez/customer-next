import React from 'react'

const CustomerList = () => {
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
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="" />
              </div>
            </div> */}
            <div>
              <div className="font-bold">Jordan Oxalc</div>
              <div className="text-sm opacity-50">Vasquez Fernandez</div>
            </div>
          </div>
        </td>
        <td>
          jordan@gmail.com
          <br/>
          <span className="badge badge-ghost badge-sm">94801052</span>
        </td>
        <td>Activo</td>
        <th>
          <button className="btn btn-ghost btn-xs">Premiun</button>
        </th>
      </tr>
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
  )
}

export default CustomerList
