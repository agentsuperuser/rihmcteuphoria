import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='lg:h-24 lg:w-24 h-16 w-16' src={Logo} />
        </a>
        <a href="https://wa.me/918136986690/"><button className='btn btn-sm font-bold'>Book Shows</button></a>
      </div>
    </div>
  </header>;
};

export default Header;
