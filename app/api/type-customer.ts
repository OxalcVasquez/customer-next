import { IType } from "../types/type";

const baseUrl = "http://localhost:8080/api/types"

export const getAllTypeCustomers = async ():Promise<IType[]> => {
  const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
  const types = await res.json();
  return types.data;
}