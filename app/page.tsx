import CreateCustomer from "./components/CreateCustomer";
import CustomerList from "./components/CustomerList";
import { getAllCustomers } from "./api/customer-service";
import { useEffect, useState } from "react";
import { ICustomer } from "./types/customer";
import { getAllTypeCustomers } from "./api/type-customer";

export default async function Home() {

  const customers = await getAllCustomers();
  const types = await getAllTypeCustomers();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex flex-col gap-4 text-center">
        <h1 className="text-center text-2xl font-bold">Gestión de Clientes</h1>
        <CreateCustomer types={types} />
        <CustomerList customers={customers} types={types}/>
      </div>
    </main>
  );
}
