import { boolean, mixed, number, object, ref, string } from 'yup';

export const schema = object().shape({
  name: string()
    .required()
    .matches(/^[A-Z]/, 'first latter should be uppercase'),
  age: number()
    .transform((origValue) => {
      const value = Number(origValue);
      return Number.isNaN(value) ? null : value;
    })
    .required()
    .positive('should be positive'),
  email: string().required().email('not valid email'),
  password: string()
    .required()
    .matches(/[a-z]/, 'password should contains lowercase letter')
    .matches(/[A-Z]/, 'password should contains uppercase letter')
    .matches(/[0-9]/, 'password should contains number')
    .matches(/[!@#$&*]/, 'password should contains one special character'),
  passwordRep: string()
    .required()
    .oneOf([ref('password')], "passwords don't match"),
  gender: string().required(),
  photo: mixed<FileList>().test(
    'Image is required',
    (value) => !!(value as FileList)[0]
  ),
  rules: boolean().oneOf([true], 'This field is required'),
});
