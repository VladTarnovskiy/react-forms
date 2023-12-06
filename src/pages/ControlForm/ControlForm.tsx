import './controlForm.scss';
import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, selectCountries } from '@/store/slices/MainPageSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { schema } from '@/utils/schemaValidation';
import { ICardItem } from '@/types/types';
import { getFileLink } from '@/utils/fileLink';

export const ControlFrom: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formMessageRef = useRef<HTMLDivElement>(null);
  const countries = useSelector(selectCountries);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICardItem>({ resolver: yupResolver(schema), mode: 'all' });

  const onSubmit = (data: ICardItem) => {
    const formData = {
      ...data,
      photo: getFileLink(data.photo!),
    };
    formMessageRef.current?.classList.add('active');
    setTimeout(() => {
      formMessageRef.current?.classList.remove('active');
      reset();
      navigate('/');
    }, 3000);
    dispatch(addCard(formData));
  };

  return (
    <form
      className="control-form"
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
      <div className="control-form__error">{errors.name?.message}</div>
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
      <div className="control-form__error">{errors.age?.message}</div>
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
      <div className="control-form__error">{errors.email?.message}</div>
      <div className="input__item">
        <label htmlFor="password" className="input__item-title">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="form__password"
          autoComplete="off"
          {...register('password')}
        />
      </div>
      <div className="control-form__error">{errors.password?.message}</div>
      <div className="input__item">
        <label htmlFor="repPassword" className="input__item-title">
          Repeat password:
        </label>
        <input
          type="password"
          id="repPassword"
          placeholder="Repeat password"
          autoComplete="off"
          {...register('passwordRep')}
        />
      </div>
      <div className="control-form__error">{errors.passwordRep?.message}</div>
      <div className="input__item">
        <label className="input__item-title" htmlFor="country">
          Country:
        </label>
        <select
          className="form__country"
          {...register('country', {
            required: 'Choose country!',
          })}
          id="country"
        >
          {countries.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="control-form__error">{errors.country?.message}</div>
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
      <div className="control-form__error">{errors.gender?.message}</div>
      <div className="input__item">
        <label htmlFor="file" className="input__item-title">
          Your photo:
        </label>
        <input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          placeholder="Choose file"
          className="form__file"
          {...register('photo')}
        />
      </div>
      <div className="control-form__error">{errors.photo?.message}</div>
      <div className="input__item">
        <label htmlFor="rules">
          <input type="checkbox" id="rules" {...register('rules')} />I agree to
          the processing of personal data
        </label>
      </div>
      <div className="control-form__error">{errors.rules?.message}</div>
      <button type="submit" className="submit__button">
        Submit
      </button>
    </form>
  );
};
