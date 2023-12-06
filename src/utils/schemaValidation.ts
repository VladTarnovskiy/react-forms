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
  confirmedPassword: string()
    .required()
    .oneOf([ref('password')], "passwords don't match"),
  gender: string().required(),
  country: string().required(),
  file: mixed<FileList>()
    .test('is-valid-type', 'photo is required field', (value) =>
      value && value[0] ? true : false
    )
    .test('is-valid-type', 'Only .png and .jpg(.jpeg) files', (value) =>
      value && value[0]
        ? ['image/png', 'image/jpeg'].includes(value[0].type)
        : false
    )
    .test('is-valid-size', 'Max allowed size is 100KB', (value) =>
      value && value[0] ? value[0].size <= 102400 : false
    ),
  rules: boolean().oneOf([true], 'this field is required'),
});
