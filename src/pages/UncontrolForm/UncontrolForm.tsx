import './uncontrolForm.scss';
import React, { FC } from 'react';
// import { FormCardType } from '../../types/types';

// interface MyProps {
//   addCard: (card: FormCardType) => void;
// }

export const UncontrolFrom: FC = () => {
  const formRef = React.createRef<HTMLFormElement>();

  const formMessageRef = React.createRef<HTMLDivElement>();

  const nameRef = React.createRef<HTMLInputElement>();

  const birthdayRef = React.createRef<HTMLInputElement>();

  const countryRef = React.createRef<HTMLSelectElement>();

  const carRef = React.createRef<HTMLInputElement>();

  const motorcycleRef = React.createRef<HTMLInputElement>();

  const bikeRef = React.createRef<HTMLInputElement>();

  const maleRef = React.createRef<HTMLInputElement>();

  const femaleRef = React.createRef<HTMLInputElement>();

  const fileRef = React.createRef<HTMLInputElement>();

  const rulesRef = React.createRef<HTMLInputElement>();

  const nameRefMessage = React.createRef<HTMLDivElement>();

  const birthdayRefMessage = React.createRef<HTMLDivElement>();

  const countryRefMessage = React.createRef<HTMLDivElement>();

  const genderRefMessage = React.createRef<HTMLDivElement>();

  const fileRefMessage = React.createRef<HTMLDivElement>();

  const rulesRefMessage = React.createRef<HTMLDivElement>();

  const getFileLink = (fileObj: FileList) => {
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    return file;
  };

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { addCard } = props;

    const nameRefEl = nameRef.current ? nameRef.current?.value : '';

    const birthdayRefEl = birthdayRef.current ? birthdayRef.current?.value : '';

    const countryRefEl = countryRef.current ? countryRef.current?.value : '';

    const carRefEl = carRef.current ? carRef.current?.checked : false;

    const motorcycleRefEl = motorcycleRef.current
      ? motorcycleRef.current?.checked
      : false;

    const bikeRefEl = bikeRef.current ? bikeRef.current?.checked : false;

    const maleRefEl = maleRef.current?.value;

    const femaleRefEl = femaleRef.current?.value;

    const fileRefEl = fileRef.current?.files;
    const imgRef = getFileLink(fileRefEl!);
    const rulesRefEl = rulesRef.current ? rulesRef.current?.checked : false;

    const sex = maleRef.current?.checked ? maleRefEl : femaleRefEl;

    formMessageRef.current?.classList.add('active');
    formRef.current?.reset();
    const formData = {
      name: nameRefEl,
      birthday: birthdayRefEl,
      country: countryRefEl,
      vehicle: {
        car: carRefEl,
        motorcycle: motorcycleRefEl,
        bike: bikeRefEl,
      },
      gender: sex!,
      photo: imgRef,
      rules: rulesRefEl,
    };
    // addCard(formData);
    console.log(formData);
    setTimeout(() => {
      formMessageRef.current?.classList.remove('active');
    }, 3000);
  };

  const checkValidity = () => {
    const nameRefEl = nameRef.current;

    const birthdayRefEl = birthdayRef.current;

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

    if (birthdayRefEl!.validity.valid === false) {
      birthdayRefMessage.current?.classList.add('active');
    } else {
      birthdayRefMessage.current?.classList.remove('active');
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
        <div className="input__item-title">Name:</div>
        <input
          type="text"
          placeholder="Enter name"
          className="form__name"
          name="name"
          ref={nameRef}
          pattern="[A-Z][a-z]*"
          minLength={3}
          required
        />
      </div>
      <div className="form__error" ref={nameRefMessage}>
        The first name should start from capital letter, min length 3
      </div>
      <div className="input__item">
        <div className="input__item-title">Birthday:</div>
        <input
          type="date"
          placeholder="Enter date"
          className="form__date"
          name="birthday"
          ref={birthdayRef}
          required
        />
      </div>
      <div className="form__error" ref={birthdayRefMessage}>
        Enter your birthday
      </div>
      <div className="input__item">
        <div className="input__item-title">Country:</div>
        <select
          name="country"
          className="form__country"
          required
          ref={countryRef}
        >
          <option value="Belarus">Belarus</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div className="form__error" ref={countryRefMessage}>
        Choose your country
      </div>
      <div className="input__item">
        <span className="input__item-title">Vehicle:</span>
        <div className="form__vehicle">
          <label htmlFor="car">
            <input
              type="checkbox"
              id="car"
              name="vehicle"
              value="car"
              ref={carRef}
            />{' '}
            Car
          </label>
          <label htmlFor="motorcycle">
            <input
              type="checkbox"
              id="motorcycle"
              name="vehicle"
              value="motorcycle"
              ref={motorcycleRef}
            />{' '}
            Motorcycle
          </label>
          <label htmlFor="bike">
            <input
              type="checkbox"
              id="bike"
              name="vehicle"
              value="bike"
              ref={bikeRef}
            />{' '}
            Bike
          </label>
        </div>
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
        Choose gender
      </div>
      <div className="input__item">
        <span className="input__item-title">Your photo:</span>
        <input
          type="file"
          placeholder="Choose file"
          className="form__file"
          accept="image/*"
          required
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
            required
            ref={rulesRef}
          />{' '}
          I agree to the processing of personal data
        </label>
      </div>
      <div className="form__error" ref={rulesRefMessage}>
        To continue agree to the processing of your data
      </div>
      <button type="submit" className="submit__button" onClick={checkValidity}>
        Submit
      </button>
    </form>
  );
};
