import React from 'react'
import Banner2 from '../assets/banner2.jpg'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({ isVisible, onClose }) => {

    if ( !isVisible ) return null;

  return (
    <div className='px-5 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center py-5'>
        <div className='px-2 flex flex-col'>
            <button className='text-white text-xl place-self-end font-bold p-2' onClick={() => onClose()}><AiOutlineClose /></button>
            <div className='bg-black/50 border-y-8 py-2 border-purple-500  overflow-scroll h-[500px] p-2 rounded-lg'>
                
                <div className='flex justify-center h-[300px]'>
                    <img className='border-4 rounded-xl border-purple-500' src={Banner2} />
                </div>
                <div className='grid justify-center'>
                    <h2 className='font-bold text-gray-100'>Ticket Price : <span className='font-bold text-emerald-500'>350/-</span></h2>
                    <div className='rounded-xl p-1 grid justify-center text-center border-2 border-violet-500 bg-purple-500/30'>
                        <h2 className='font-semibold text-sm text-sky-500'>Experience our magic of our show with your loved ones, and we're
                        making it even better! For every 10 tickets you purchase, <span className='text-emerald-500 font-bold underline'>we'll gift you an extra FREE</span></h2>
                    </div>
                    <h1 className='text-sm font-bold text-gray-100 underline'>Contact co-ordinators to book shows</h1>
                    <div>
                    <h2 className='mt-3 flex items-center gap-x-2 font-semibold text-gray-100'>Vivek Venugopal : <a href='https://wa.me/918113913862' className='p-1 bg-purple-100 rounded-full text-emerald-500'><IoLogoWhatsapp/></a></h2>
                    <h2 className='flex items-center gap-x-2 font-semibold text-gray-100'>Alvi : <a href='https://wa.me/918136986690' className='p-1 bg-purple-100 rounded-full text-emerald-500'><IoLogoWhatsapp/></a> </h2>
                    <h2 className='flex items-center gap-x-2 font-semibold text-gray-100'>Unni Krishnan : <a href='https://wa.me/918075092457' className='p-1 bg-purple-100 rounded-full text-emerald-500'><IoLogoWhatsapp/></a> </h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal;