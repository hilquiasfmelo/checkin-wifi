export interface ICreateUsersDTO {
  fullname: string;
  nickname: string;
  cpf: string;
  isAdv: boolean;
  oab?: number;
  state?: string;
}
