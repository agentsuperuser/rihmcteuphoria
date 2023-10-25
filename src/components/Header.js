import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import Modal from './Modal';

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='lg:h-24 lg:w-24 h-16 w-16' src={Logo} />
        </a>
          <button onClick={() => setShowModal(true)} className='btn btn-sm font-bold'>Book Shows</button>
          <Modal onClose={() => setShowModal(false)} isVisible={showModal}/>
      </div>
    </div>
  </header>;
};

export default Header;
