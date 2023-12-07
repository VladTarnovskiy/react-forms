import { ValidationError } from 'yup';

export type IError = {
  [field: string]: string[];
};

export const getErrorObject = (err: ValidationError): IError => {
  const object: IError = {};
  err.inner.forEach((error) => {
    if (error.path !== undefined) {
      if (object[error.path] !== undefined) {
        object[error.path].push(error.errors[0]);
      } else {
        object[error.path] = error.errors;
      }
    }
  });
  return object;
};
