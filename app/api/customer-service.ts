import { ICustomer } from "../types/customer"

const baseUrl = "http://localhost:8080/api/customers"

export const getAllCustomers = async ():Promise<ICustomer[]> => {
  const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
  const customers = await res.json();
  return customers.data;
}