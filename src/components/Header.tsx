import React from 'react';
import { Link } from 'react-router-dom'; 
import User from '../SignUp/User';
import SavedItems from '../SavedItems/SavedItems';

const Header: React.FC = () => {
  return (
    <header className="bg-customcolor2 p-[30px] text-white opacity-90 text-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Antique Jewels
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:bg-customcolor3 hover:text-white hover:font-semibold hover:rounded-lg hover:opacity-90">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-customcolor3 hover:text-white hover:font-semibold hover:rounded-lg hover:opacity-90">
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className="hover:bg-customcolor3 hover:text-white hover:font-semibold hover:rounded-lg hover:opacity-90">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:bg-customcolor3 hover:text-white hover:rounded-lg hover:font-semibold hover:opacity-90">
              <Link to="/sold">Sold</Link>
            </li>
            <li className="hover:bg-customcolor3 hover:text-white hover:rounded-lg hover:font-semibold hover:opacity-90">
              <Link to="/categories">Categories</Link>
            </li>
            <li className="hover:bg-customcolor3 hover:text-white hover:rounded-lg hover:font-semibold hover:opacity-90">
              <Link to="/market">Mar</Link>
            </li>
            <div className='hover:bg-customcolor3 rounded'>
              <User />
              <SavedItems />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
