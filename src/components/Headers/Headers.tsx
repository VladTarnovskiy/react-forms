import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="flex justify-around p-2 text-xl">
      <Link to="/">
        <button className="text-white rounded bg-blue-900 p-2">MainPage</button>
      </Link>
      <Link to="form/controlled">
        <button className="text-white rounded bg-blue-900 p-2">
          ControlledForm
        </button>
      </Link>
      <Link to="form/uncontrolled">
        <button className="text-white rounded bg-blue-900 p-2">
          UncontrolledFrom
        </button>
      </Link>
    </header>
  );
};
