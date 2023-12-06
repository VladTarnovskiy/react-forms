import './uncontrolForm.scss';
import React, { FC, FormEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, selectCountries } from '@/store/slices/MainPageSlice';
import { useNavigate } from 'react-router-dom';
import { schema } from '@/utils/schemaValidation';
import { ValidationError } from 'yup';
import { getFileLink } from '@/utils/fileLink';
import { IError, getErrorObject } from '@/utils/errorObject';

export const UncontrolFrom: FC = () => {
  const countries = useSelector(selectCountries);
  const [validationErrors, setValidationErrors] = useState<IError>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const formMessageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const rulesRef = useRef<HTMLInputElement>(null);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataValidate = await getFormData();
    try {
      await schema.validate(dataValidate, { abortEarly: false });
      const fileRefEl = fileRef.current?.files;
      const imgRef = fileRefEl ? getFileLink(fileRefEl) : '';
      const data = { ...dataValidate, photo: imgRef };
      formMessageRef.current?.classList.add('active');
      setTimeout(() => {
        dispatch(addCard(data));
        formMessageRef.current?.classList.remove('active');
        navigate('/');
      }, 3000);
    } catch (err) {
      if (err instanceof ValidationError) {
        const errors = getErrorObject(err);
        setValidationErrors(errors);
      }
    }
  };

  const getFormData = async () => {
    const maleRefEl = maleRef.current?.checked;
    const femaleRefEl = femaleRef.current?.checked;
    let sex: string | undefined;
    if (maleRefEl) {
      sex = 'male';
    } else if (femaleRefEl) {
      sex = 'female';
    } else {
      sex = undefined;
    }
    let file: FileList | undefined;
    if (fileRef.current?.files && fileRef.current.files[0]) {
      file = fileRef.current.files;
    } else {
      file = undefined;
    }

    return {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordRep: passwordRepRef.current?.value,
      gender: sex,
      rules: rulesRef.current?.checked,
      photo: file,
      country: countryRef.current?.value,
    };
  };

  return (
    <form
      className="form"
      name="PersonalDataForm"
      ref={formRef}
      onSubmit={submitForm}
    >
      <div className="form__saved" ref={formMessageRef}>
        <div className="form__saved-message">Data saved!</div>
      </div>
      <div className="form__title">Personal data</div>
      <div className="input__item">
        <label htmlFor="name" className="input__item-title">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          name="name"
          ref={nameRef}
        />
      </div>
      <div className="form__error">{validationErrors.name?.[0]}</div>
      <div className="input__item">
        <label htmlFor="age" className="input__item-title">
          Age:
        </label>
        <input
          type="number"
          id="age"
          placeholder="Enter age"
          name="age"
          ref={ageRef}
        />
      </div>
      <div className="form__error">{validationErrors.age?.[0]}</div>
      <div className="input__item">
        <label htmlFor="email" className="input__item-title">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          ref={emailRef}
        />
      </div>
      <div className="form__error">{validationErrors.email?.[0]}</div>
      <div className="input__item">
        <label htmlFor="password" className="input__item-title">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="form__password"
          name="password"
          autoComplete="off"
          ref={passwordRef}
        />
      </div>
      <div className="form__error">{validationErrors.password?.[0]}</div>
      <div className="input__item">
        <label htmlFor="repPassword" className="input__item-title">
          Repeat password:
        </label>
        <input
          type="password"
          id="repPassword"
          placeholder="Repeat password"
          name="password"
          autoComplete="off"
          ref={passwordRepRef}
        />
      </div>
      <div className="form__error">{validationErrors.passwordRep?.[0]}</div>
      <div className="input__item">
        <label className="input__item-title" htmlFor="country">
          Country:
        </label>
        <select
          className="form__country"
          ref={countryRef}
          id="country"
          defaultValue={'Belarus'}
        >
          {countries.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="form__error">{validationErrors.country?.[0]}</div>
      <div className="input__item">
        <span className="input__item-title">Gender:</span>
        <div className="form__gender">
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              ref={maleRef}
            />{' '}
            male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              ref={femaleRef}
            />{' '}
            female
          </label>
        </div>
      </div>
      <div className="form__error">{validationErrors.gender?.[0]}</div>
      <div className="input__item">
        <label htmlFor="file" className="input__item-title">
          Your photo:
        </label>
        <input
          type="file"
          id="file"
          placeholder="Choose file"
          className="form__file"
          ref={fileRef}
        />
      </div>
      <div className="form__error">{validationErrors.photo?.[0]}</div>
      <div className="input__item">
        <label htmlFor="rules">
          <input
            type="checkbox"
            id="rules"
            name="rules"
            value="motorcycle"
            ref={rulesRef}
          />{' '}
          I agree to the processing of personal data
        </label>
      </div>
      <div className="form__error">{validationErrors.rules?.[0]}</div>
      <button type="submit" className="submit__button">
        Submit
      </button>
    </form>
  );
};
