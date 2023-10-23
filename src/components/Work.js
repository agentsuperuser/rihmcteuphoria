import React from 'react';
import MainCounter from '../assets/maincounter.jpg'
import Ancillary from '../assets/ancillary.png'
import funzone from '../assets/funzone.jpg'

const Work = () => {
  return <section id='work' className='section grid'>
    <div className='container mx-auto mt-10'>
      <div>
        <div>
          <div className='flex justify-center'>
            <h2 className='h2 leading-tight text-accent font-semibold'>Counters</h2>
          </div>
          <h3 className='h3 mt-14 mb-16'> Food Counters</h3>

          <div className='grid justify-center lg:flex lg:justify-start gap-7 mt-6'>
            <div class="bg-black/40 max-w-sm backdrop-blur-2xl rounded-xl p-2 overflow-hidden grid items-center text-2xl text-white/50">
  <img class="w-full rounded-xl" src={MainCounter} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2 gap-y-3">
  <div class="font-bold text-xl text-white mb-2">Main Food Counter</div>
  <div className=''>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Wrap N Grill</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Flavours of Kerala</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Chars N' Skewers</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Flame of China</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Baratie</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Matka Biriyani</span>
  </div>
  </div>

</div>

<div class="bg-black/40 max-w-sm backdrop-blur-2xl rounded-xl p-2 overflow-hidden grid items-center text-2xl text-white/50">
  <img class="w-full rounded-xl" src={Ancillary} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2 gap-y-3">
  <div class="font-bold text-xl text-white mb-2">Ancillary Counter</div>
  <div className=''>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Helado Frito</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Bloody Sweet</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Kulukki Hub</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Indian Sweets</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Dunkin Dumplings</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Las Tapas</span>
  </div>
  </div>

</div>


            </div>
            <div className='grid justify-center'>
        <h3 className='h3 mt-14 mb-10'>Fun Zone Counter</h3>
        <div class="bg-black/40 max-w-sm backdrop-blur-2xl rounded-xl p-2 overflow-hidden grid items-center text-2xl text-white/50">
  <img class="w-full rounded-xl" src={funzone} alt="Sunset in the mountains"/>
  <div class="px-4 pt-4 pb-2 gap-y-3">
  <div class="font-bold text-xl text-white mb-2">FUN ZONE</div>
  <div className=''>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Ring Toss Game</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Pyramid Can Game</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Dart Arrow Game</span>
    <span class="inline-block bg-[#e12ef831] text-base border-2 font-bold border-emerald-400 rounded-full px-3 py-1 text-white mt-2 mr-2">Cup Drop Challenge</span>
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
