import './controlForm.scss';
import { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '@/store/slices/MainPageSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { schema } from '@/utils/schemaValidation';
import { ICardItem } from '@/types/types';

export const ControlFrom: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formMessageRef = useRef<HTMLDivElement>(null);

  const getFileLink = (fileObj: FileList) => {
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    return file;
  };

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
      <div className="control-form__error">
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
          autoComplete="off"
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
          autoComplete="off"
          {...register('passwordRep')}
        />
      </div>
      <div className="control-form__error">
        {errors.passwordRep && <p>{errors.passwordRep.message}</p>}
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
          accept="image/png, image/jpeg"
          placeholder="Choose file"
          className="form__file"
          {...register('photo')}
        />
      </div>
      <div className="control-form__error">
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>
      <div className="input__item">
        <label htmlFor="rules">
          <input type="checkbox" id="rules" {...register('rules')} />I agree to
          the processing of personal data
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
