import { IType } from "./type";

export interface ICustomer {
  id: number,
  name: string,
  lastName: string,
  email: string,
  phone: string,
  status: boolean,
  typeId: number,
  type: IType
}

export interface ICustomerCreate {
  name: string,
  last_name: string,
  email: string,
  phone: string,
  status: boolean,
  type_id: number,
}