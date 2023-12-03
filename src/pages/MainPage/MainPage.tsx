import { FC } from 'react';
import './mainPage.scss';
import { Link } from 'react-router-dom';

export const MainPage: FC = () => {
  return (
    <div>
      <div className="content flex justify-around w-full">
        <Link to="form/control">
          <button className="text-white rounded bg-blue-900">
            ControlFrom
          </button>
        </Link>
        <Link to="form/uncontrol">
          <button className="text-white rounded bg-blue-900">
            UnControlFrom
          </button>
        </Link>
        <div className="content__list flex-grow">
          <div className="cards__container p-5">cards</div>
        </div>
      </div>
    </div>
  );
};
