import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="flex justify-around p-2 text-xl">
      <Link to="/">
        <button className="text-white rounded bg-blue-900 p-2">MainPage</button>
      </Link>
      <Link to="form/control">
        <button className="text-white rounded bg-blue-900 p-2">
          ControlFrom
        </button>
      </Link>
      <Link to="form/uncontrol">
        <button className="text-white rounded bg-blue-900 p-2">
          UnControlFrom
        </button>
      </Link>
    </header>
  );
};
