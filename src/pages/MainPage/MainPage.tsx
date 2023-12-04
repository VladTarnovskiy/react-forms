import { FC } from 'react';
import './mainPage.scss';
import { useSelector } from 'react-redux';
import { selectCardsData } from '@/store/slices/MainPageSlice';
import { Card } from '@/components/Card/Card';

export const MainPage: FC = () => {
  const cards = useSelector(selectCardsData);
  return (
    <div>
      <div className="content flex justify-around w-full">
        <div className="content__list flex-grow">
          <div className="cards__container p-5">
            {cards.map((card) => (
              <Card cardData={card} key={card.password} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
