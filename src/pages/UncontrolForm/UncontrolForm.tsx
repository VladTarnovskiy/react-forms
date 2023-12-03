import { boolean, number, object, string } from 'yup';
import './uncontrolForm.scss';
import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ICardItem, addCard } from '@/store/slices/MainPageSlice';
// import { FormCardType } from '../../types/types';

// interface MyProps {
//   addCard: (card: FormCardType) => void;
// }

export const UncontrolFrom: FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<ICardItem>();

  const formRef = useRef<HTMLFormElement>(null);

  const formMessageRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);

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

  const genderRefMessage = useRef<HTMLDivElement>(null);

  const fileRefMessage = useRef<HTMLDivElement>(null);

  const rulesRefMessage = useRef<HTMLDivElement>(null);

  const getFileLink = (fileObj: FileList) => {
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    return file;
  };

  const setData = () => {
    // const { addCard } = props;

    const nameRefEl = nameRef.current ? nameRef.current?.value : '';

    const ageRefEl = ageRef.current ? ageRef.current?.value : '';

    const emailRefEl = emailRef.current ? emailRef.current?.value : '';

    const passwordRefEl = passwordRef.current ? passwordRef.current?.value : '';

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
      gender: sex!,
      photo: imgRef,
      rules: String(rulesRefEl),
    };
    // addCard(formData);
    setFormData(formData);
    dispatch(addCard(formData));
    checkValidity();

    console.log(formData);
    setTimeout(() => {
      formMessageRef.current?.classList.remove('active');
    }, 3000);
  };

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { addCard } = props;
  };

  const checkValidity = async () => {
    const schema = object().shape({
      name: string()
        .required()
        .matches(/^[A-Z]/, 'First latter should be uppercase'),
      age: number().required().positive('Should be positive'),
      email: string().required().email('Not valid email'),
      password: string()
        .required()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/,
          'First latter should be uppercase'
        ),
      passwordRep: string()
        .required()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/,
          'First latter should be uppercase'
        ),
      gender: string().required(),
      photo: string().required(),
      rules: boolean().required(),
    });

    try {
      await schema.validate(formData);
    } catch (error) {
      // if (typeof error === "string") {
      //   // handle string error
      // } else if (error instanceof Error) {
      console.log(error);
      // }
    }
    // const error = await schema.validate(formData);
    // if (error) {
    //   console.log(error.age);
    // }

    const nameRefEl = nameRef.current;

    const ageRefEl = ageRef.current;

    const emailRefEl = emailRef.current;

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
          minLength={3}
        />
      </div>
      <div className="form__error" ref={nameRefMessage}>
        The first name should start from capital letter, min length 3
      </div>
      <div className="input__item">
        <label htmlFor="age" className="input__item-title">
          Age:
        </label>
        <input
          type="text"
          id="age"
          placeholder="Enter age"
          name="age"
          ref={ageRef}
        />
      </div>
      <div className="form__error" ref={ageRefMessage}>
        Enter your age
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
          ref={emailRef}
        />
      </div>
      <div className="form__error" ref={ageRefMessage}>
        Enter your email.
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
          ref={passwordRef}
        />
      </div>
      <div className="form__error" ref={ageRefMessage}>
        Enter your password.
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
          ref={passwordRepRef}
        />
      </div>
      <div className="form__error" ref={ageRefMessage}>
        Enter your password.
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
      <div className="form__error" ref={genderRefMessage}>
        Choose gender
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
          accept="image/*"
          ref={fileRef}
        />
      </div>
      <div className="form__error" ref={fileRefMessage}>
        Choose your photo
      </div>
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
      <div className="form__error" ref={rulesRefMessage}>
        To continue agree to the processing of your data
      </div>
      <button type="submit" className="submit__button" onClick={setData}>
        Submit
      </button>
    </form>
  );
};
