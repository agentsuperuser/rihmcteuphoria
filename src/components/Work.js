import React from 'react';
import Aanavandi from '../assets/aanavandi.png'
import MainCounter from '../assets/maincounter.jpg'
import Ancillary from '../assets/ancillary.png'

const Work = () => {
  return <section id='work' className='section'>
    <div className='container mx-auto mt-10'>
      <div>
        <div>
          <div className='flex justify-center'>
            <h2 className='h2 leading-tight text-accent font-semibold'>Food Counters</h2>
          </div>

          <div className='grid justify-center lg:flex lg:justify-start gap-7 mt-6'>
            <div class="bg-black/40 max-w-sm backdrop-blur-2xl rounded-xl p-2 overflow-hidden grid items-center text-2xl text-white/50">
  <img class="w-full rounded-xl" src={MainCounter} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2 gap-y-3">
  <div class="font-bold text-xl text-white mb-2">Main Food Counter</div>
  <div className=''>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Wrap & Grill</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Flavours of Kerala</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Mandarin Kitchen</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Barati</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Hyderabadi Matka Biriyani</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Chars & Skewars</span>
  </div>
  </div>

</div>

<div class="bg-black/40 max-w-sm backdrop-blur-2xl rounded-xl p-2 overflow-hidden grid items-center text-2xl text-white/50">
  <img class="w-full rounded-xl" src={Ancillary} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2 gap-y-3">
  <div class="font-bold text-xl text-white mb-2">Main Food Counter</div>
  <div className=''>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Helado Fritta</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Bloody Sweet</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Dunkin Dumplings</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Panipuri & Chatt</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Fizz n Chillz</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Indian Sweets</span>
  </div>
  </div>

</div>

            </div>
        </div>
      </div>
     </div>
  </section>;
};

export default Work;
