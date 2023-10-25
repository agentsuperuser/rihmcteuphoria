import React from 'react';
import {BiHomeAlt} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsFillChatDotsFill,} from 'react-icons/bs'
import {VscListFilter} from 'react-icons/vsc'
import {IoFastFood} from 'react-icons/io5'
import {Link} from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link 
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          activeClass='active'
          smooth={true}
          spy={true}
          to='home'
          offset={-200}
        >
          <BiHomeAlt />
        </Link>
        <Link 
          to='about'
          activeClass='active'
          smooth={true}
          spy={true} 
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
        >
          <VscListFilter />
        </Link>
        <Link 
        to='programs'
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          activeClass='active'
          smooth={true}
          spy={true}
        >
          <BsClipboardData />
        </Link>
        <Link 
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          activeClass='active'
          smooth={true}
          to='work'
          spy={true}
        >
          <IoFastFood />
        </Link>
        <Link 
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          activeClass='active'
          smooth={true}
          spy={true}
          to='contact'
        >
          <BsFillChatDotsFill />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
