export interface ICardItemForm {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordRep: string;
  gender: string;
  photo: string;
  rules: boolean;
}

export interface ICardItem {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordRep: string;
  gender: string;
  photo?: FileList | undefined;
  rules?: boolean | undefined;
}
