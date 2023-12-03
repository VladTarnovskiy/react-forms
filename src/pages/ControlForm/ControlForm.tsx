import { number, object, string } from 'yup';
import './controlForm.scss';
import { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ICardItem, addCard } from '@/store/slices/MainPageSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const ControlFrom: FC = () => {
  const dispatch = useDispatch();
  const formMessageRef = useRef<HTMLDivElement>(null);

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
      ).when(['password'], (password) => {
        if (password) {
            return Yup.date()
                .min(start_date, 'End Date must be after Start Date')
                .typeError('End Date is required')
        }
    }),,
    gender: string().required(),
    photo: string().required(),
    rules: string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICardItem>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ICardItem) => {
    formMessageRef.current?.classList.add('active');
    setTimeout(() => {
      formMessageRef.current?.classList.remove('active');
    }, 3000);
    dispatch(addCard(data));

    console.log(data);
  };

  return (
    <form
      className="form"
      name="PersonalDataForm"
      onSubmit={handleSubmit(onSubmit)}
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
          {...register('name')}
        />
      </div>
      <div className="form__error">
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="input__item">
        <label htmlFor="age" className="input__item-title">
          Age:
        </label>
        <input
          type="number"
          id="age"
          placeholder="Enter age"
          {...register('age')}
        />
      </div>
      <div className="control-form__error">
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div className="input__item">
        <label htmlFor="email" className="input__item-title">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          {...register('email')}
        />
      </div>
      <div className="control-form__error">
        {errors.email && <p>{errors.email.message}</p>}
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
          {...register('password')}
        />
      </div>
      <div className="control-form__error">
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div className="input__item">
        <label htmlFor="repPassword" className="input__item-title">
          Repeat password:
        </label>
        <input
          type="password"
          id="repPassword"
          placeholder="Repeat password"
          {...register('passwordRep')}
        />
      </div>
      <div className="control-form__error">
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div className="input__item">
        <span className="input__item-title">Gender:</span>
        <div className="form__gender">
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              {...register('gender')}
              value="male"
            />{' '}
            male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              {...register('gender')}
              value="female"
            />{' '}
            female
          </label>
        </div>
      </div>
      <div className="control-form__error">
        {errors.gender && <p>{errors.gender.message}</p>}
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
        />
      </div>
      <div className="control-form__error">
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>
      <div className="input__item">
        <label htmlFor="rules">
          <input
            type="checkbox"
            id="rules"
            {...register('rules')}
            value="rules"
          />
          I agree to the processing of personal data
        </label>
      </div>
      <div className="control-form__error">
        {errors.rules && <p>{errors.rules.message}</p>}
      </div>
      <button type="submit" className="submit__button">
        Submit
      </button>
    </form>
  );
};
