export interface ICardItemForm {
  id: string;
  name: string;
  country: string;
  age: number;
  email: string;
  password: string;
  confirmedPassword: string;
  gender: string;
  file: string;
  rules: boolean;
}

export interface ICardItem {
  name: string;
  country: string;
  age: number;
  email: string;
  password: string;
  confirmedPassword: string;
  gender: string;
  file?: FileList | undefined;
  rules?: boolean | undefined;
}
