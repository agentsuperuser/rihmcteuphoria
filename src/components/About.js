import { useInView } from 'framer-motion';
import React from 'react';

const About = () => {

  return <section id='about' className='section'>
    <div className='container mx-auto lg:flex lg:justify-between lg:items-center'>
      <div className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[640px] h-[400px] mix-blend-lighten bg-top'></div>
      <div>
        <h2 className='h2 text-accent font-bold'>About Program</h2>
        <h3 className='h3 mb-4'>at <span className='text-sky-700'>Rajadhani Institute of<br /> Hotel Management and Catering Technology</span></h3>
        <div>
          <div>
            <div></div>
            <div className='text-[20px] lg:text-[40px] font-tertiary text-gradient mb-2 py-3'>
              <h2>01-11-2023 & 02-11-2023</h2>
            </div>
            <div>
              <button className='text-lg btn p-2'>Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
