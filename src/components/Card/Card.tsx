import { FC } from 'react';
import { ICardItemForm } from '@/store/slices/MainPageSlice';

interface MyProps {
  cardData: ICardItemForm;
}

export const Card: FC<MyProps> = ({ cardData }) => {
  const { age, email, gender, name, password, photo } = cardData;

  return (
    <div
      className="card flex flex-col p-4 text-white text-lg justify-center items-center rounded-xl bg-zinc-700 shadow-lg"
      data-testid="card"
    >
      <img src={photo} alt="episode__img" className="h-[180px] rounded-lg" />

      <div className="card_description flex-col">
        <div className="flex justify-between des__item">
          <div className="des__title mr-1">Name:</div>
          <div className="des__info">{name}</div>
        </div>
        <div className="flex justify-between des__item">
          <div className="des__title mr-1">Age:</div>
          <div className="des__info">{age}</div>
        </div>
        <div className="flex justify-between des__item">
          <div className="des__title mr-1">Email:</div>
          <div className="des__info">{email}</div>
        </div>
        <div className="flex justify-between des__item">
          <div className="des__title mr-1">Password:</div>
          <div className="des__info">{password}</div>
        </div>
        <div className="flex justify-between des__item">
          <div className="des__title mr-1">Gender:</div>
          <div className="des__info">{gender}</div>
        </div>
      </div>
    </div>
  );
};
