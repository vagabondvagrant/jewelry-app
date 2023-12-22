
import React from 'react';
import User from '../SignUp/User';
// import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-900 p-[50px] text-white opacity-90 transparent text-xl sm:bg-gray-900 sm:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold ">Antique Jewels</span>
        <nav>
          <ul className="flex space-x-4">
            <li className=" hover:bg-yellow-300 hover:text-black hover:rounded-lg hover:opacity-90">Home</li>
            <li className=" hover:bg-yellow-300 hover:text-black hover:rounded-lg hover:opacity-90">Catalog</li>
            <li className=" hover:bg-yellow-300 hover:text-black hover:rounded-lg hover:opacity-90">About Us</li>
            <li className=' hover:bg-yellow-300 hover:text-black hover:rounded-lg hover:opacity-90'>
              Categories
             </li>
             <div className='hover:bg-gray-400 rounded'>
            <User/>
             </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
