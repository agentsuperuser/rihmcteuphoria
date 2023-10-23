import React from 'react';
import Aanavandi from '../assets/aanavandi.png'
import StreetAcademics from '../assets/StreetAcademics.jpg'
import DJSha from '../assets/djsha.jpg'

const Services = () => {
  return <section id='programs' className='section'>
    <div className='container mx-auto'>
      <div className='flex justify-center items-center'>
        <div>
          <h2 className='h2 font-semibold text-accent mb-6'>Programs & Pro-Shows</h2>
        </div>
      </div>
      <div>
        <h3 className='h3 mt-9 mb-16'> Stage Shows</h3>
        <div className='grid lg:flex justify-center gap-7 lg:justify-start'>
        <div class="max-w-sm rounded-xl p-2 overflow-hidden bg-[#252525] shadow-2xl">
  <img class="w-[450px] h-[210px] rounded-xl" src={Aanavandi} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2">
    <span class="inline-block bg-[#e12ef831] text-lg border-2 font-bold border-[#d540fa] rounded-full px-3 py-1 text-white mr-2">BAND</span>
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Aanavandi The Band</div>
    <p class="text-gray-300 text-lg font-semibold">
      Kerala based music band know for their music shows in Malayalam songs
    </p>
  </div>

</div>
<div class="max-w-sm rounded-xl p-2 overflow-hidden bg-[#252525] shadow-2xl">
  <img class="w-full rounded-xl" src={StreetAcademics} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2">
    <span class="inline-block bg-[#e12ef831] text-lg border-2 font-bold border-[#d540fa] rounded-full px-3 py-1 text-white mr-2">HIP-HOP</span>
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Street Academics</div>
    <p class="text-gray-300 text-lg font-semibold">
      An Indian alternative hip-hop group from kerala, known for their songs blending Malayalam, English & Tamil lyrics
    </p>
  </div>

</div>
<div class="max-w-sm rounded-xl p-2 overflow-hidden bg-[#252525] shadow-2xl">
  <img class="w-full h-[210px] rounded-xl" src={DJSha} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2">
    <span class="inline-block bg-[#e12ef831] text-lg border-2 font-bold border-[#d540fa] rounded-full px-3 py-1 text-white mr-2">D J</span>
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">DJ Sha</div>
    <p class="text-gray-300 text-lg font-semibold">
      DJ artist from Kerala, known for his songs blending Malayalam, English & Tamil
    </p>
  </div>

</div>

        </div>
      </div>
    </div>
  </section>;
};

export default Services;
