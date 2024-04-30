import { IType } from "../types/type";
import { config } from '../config/config';

const baseUrl = `${config.baseUrl}/types`;

export const getAllTypeCustomers = async ():Promise<IType[]> => {
  const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
  const types = await res.json();
  return types.data;
}