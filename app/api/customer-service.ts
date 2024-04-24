import { useRouter } from "next/router";
import { ICustomer, ICustomerCreate, ICustomerUpdate } from "../types/customer"

const baseUrl = "http://localhost:8080/api/customers"

export const getAllCustomers = async ():Promise<ICustomer[]> => {
  const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
  const customers = await res.json();
  return customers.data;
}

export const createCustomer = async (customer: ICustomerCreate):Promise<ICustomer>=> {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })

  const newCustomer = await res.json();

  return newCustomer;
}

export const updateCustomer = async (customer: ICustomerUpdate):Promise<ICustomer>=> {
  const res = await fetch(`${baseUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })

  const updateCustomer = await res.json();

  return updateCustomer;
}