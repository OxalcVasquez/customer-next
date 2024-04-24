import { IType } from "./type";

export interface ICustomer {
  id: number,
  name: string,
  lastName: string,
  email: string,
  phone: string,
  status: number,
  typeId: number,
  type: IType
}