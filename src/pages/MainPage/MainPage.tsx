import { FC } from 'react';
import './mainPage.scss';
import { Link } from 'react-router-dom';

export const MainPage: FC = () => {
  return (
    <div>
      <div
        className="content flex justify-around w-full"
        data-testid="main-page-element"
      >
        <Link to="form/uncontrol">
          <button>UnContFrom</button>
        </Link>
        <div className="content__list flex-grow">
          <div className="cards__container p-5">cards</div>
        </div>
      </div>
    </div>
  );
};
