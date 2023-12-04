import './uncontrolForm.scss';
import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, selectCountries } from '@/store/slices/MainPageSlice';
import { useNavigate } from 'react-router-dom';

export const UncontrolFrom: FC = () => {
  const countries = useSelector(selectCountries);

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

  const nameRefMessage = useRef<HTMLDivElement>(null);

  const ageRefMessage = useRef<HTMLDivElement>(null);

  const emailRefMessage = useRef<HTMLDivElement>(null);

  const passwordRefMessage = useRef<HTMLDivElement>(null);

  const countryRefMessage = useRef<HTMLDivElement>(null);

  const passwordRepRefMessage = useRef<HTMLDivElement>(null);

  const genderRefMessage = useRef<HTMLDivElement>(null);

  const fileRefMessage = useRef<HTMLDivElement>(null);

  const rulesRefMessage = useRef<HTMLDivElement>(null);

  const getFileLink = (fileObj: FileList) => {
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    return file;
  };

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameRefEl = nameRef.current ? nameRef.current?.value : '';

    const ageRefEl = ageRef.current ? ageRef.current?.value : '';

    const emailRefEl = emailRef.current ? emailRef.current?.value : '';

    const passwordRefEl = passwordRef.current ? passwordRef.current?.value : '';

    const countryRefEl = countryRef.current ? countryRef.current?.value : '';

    const passwordRepRefEl = passwordRepRef.current
      ? passwordRepRef.current?.value
      : '';

    const maleRefEl = maleRef.current?.value;

    const femaleRefEl = femaleRef.current?.value;

    const fileRefEl = fileRef.current?.files;
    const imgRef = fileRefEl ? getFileLink(fileRefEl) : '';

    const rulesRefEl = rulesRef.current ? rulesRef.current?.checked : false;

    const sex = maleRef.current?.checked ? maleRefEl : femaleRefEl;

    formMessageRef.current?.classList.add('active');
    formRef.current?.reset();
    const formData = {
      name: nameRefEl,
      age: Number(ageRefEl),
      email: emailRefEl,
      password: passwordRefEl,
      passwordRep: passwordRepRefEl,
      country: countryRefEl,
      gender: sex!,
      photo: imgRef,
      rules: rulesRefEl,
    };
    dispatch(addCard(formData));
    setTimeout(() => {
      formMessageRef.current?.classList.remove('active');
      navigate('/');
    }, 3000);
  };

  const checkValidity = () => {
    const nameRefEl = nameRef.current;

    const ageRefEl = ageRef.current;

    const emailRefEl = emailRef.current;

    const passwordRefEl = passwordRef.current;

    const passwordRepRefEl = passwordRepRef.current;

    const countryRefEl = countryRef.current;

    const maleRefEl = maleRef.current;

    const femaleRefEl = femaleRef.current;

    const fileRefEl = fileRef.current;

    const rulesRefEl = rulesRef.current;

    if (nameRefEl!.validity.valid === false) {
      nameRefMessage.current?.classList.add('active');
    } else {
      nameRefMessage.current?.classList.remove('active');
    }

    if (ageRefEl!.validity.valid === false) {
      ageRefMessage.current?.classList.add('active');
    } else {
      ageRefMessage.current?.classList.remove('active');
    }

    if (emailRefEl!.validity.valid === false) {
      emailRefMessage.current?.classList.add('active');
    } else {
      emailRefMessage.current?.classList.remove('active');
    }

    if (passwordRefEl!.validity.valid === false) {
      passwordRefMessage.current?.classList.add('active');
    } else {
      passwordRefMessage.current?.classList.remove('active');
    }

    if (passwordRepRefEl!.validity.valid === false) {
      passwordRepRefMessage.current?.classList.add('active');
    } else {
      passwordRepRefMessage.current?.classList.remove('active');
    }

    if (countryRefEl!.validity.valid === false) {
      countryRefMessage.current?.classList.add('active');
    } else {
      countryRefMessage.current?.classList.remove('active');
    }

    if (
      maleRefEl!.validity.valid === false &&
      femaleRefEl!.validity.valid === false
    ) {
      genderRefMessage.current?.classList.add('active');
    } else {
      genderRefMessage.current?.classList.remove('active');
    }

    if (fileRefEl!.validity.valid === false) {
      fileRefMessage.current?.classList.add('active');
    } else {
      fileRefMessage.current?.classList.remove('active');
    }

    if (rulesRefEl!.checked === false) {
      rulesRefMessage.current?.classList.add('active');
    } else {
      rulesRefMessage.current?.classList.remove('active');
    }
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
          pattern="[A-Z][a-z]*"
          required
          minLength={3}
        />
      </div>
      <div className="form__error" ref={nameRefMessage}>
        the first name should start from capital letter, min length 3
      </div>
      <div className="input__item">
        <label htmlFor="age" className="input__item-title">
          Age:
        </label>
        <input
          type="number"
          id="age"
          placeholder="Enter age"
          name="age"
          required
          ref={ageRef}
        />
      </div>
      <div className="form__error" ref={ageRefMessage}>
        enter your age
      </div>
      <div className="input__item">
        <label htmlFor="email" className="input__item-title">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="form__error" ref={emailRefMessage}>
        enter your email
      </div>
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
          required
          ref={passwordRef}
        />
      </div>
      <div className="form__error" ref={passwordRefMessage}>
        passwords should match
      </div>
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
          required
          ref={passwordRepRef}
        />
      </div>
      <div className="form__error" ref={passwordRepRefMessage}>
        enter your password
      </div>
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
      <div className="form__error" ref={countryRefMessage}>
        choose country
      </div>
      <div className="input__item">
        <span className="input__item-title">Gender:</span>
        <div className="form__gender">
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              required
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
              required
              ref={femaleRef}
            />{' '}
            female
          </label>
        </div>
      </div>
      <div className="form__error" ref={genderRefMessage}>
        choose gender
      </div>
      <div className="input__item">
        <label htmlFor="file" className="input__item-title">
          Your photo:
        </label>
        <input
          type="file"
          id="file"
          placeholder="Choose file"
          className="form__file"
          required
          accept="image/*"
          ref={fileRef}
        />
      </div>
      <div className="form__error" ref={fileRefMessage}>
        choose your photo
      </div>
      <div className="input__item">
        <label htmlFor="rules">
          <input
            type="checkbox"
            id="rules"
            name="rules"
            required
            value="motorcycle"
            ref={rulesRef}
          />{' '}
          I agree to the processing of personal data
        </label>
      </div>
      <div className="form__error" ref={rulesRefMessage}>
        to continue agree to the processing of your data
      </div>
      <button type="submit" className="submit__button" onClick={checkValidity}>
        Submit
      </button>
    </form>
  );
};
