import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Banner = () => {
  return <section id='home' className='section'>
    <div className='container mx-auto'>
      <div>
        <div>
          <h1 
            className='text-[60px] font-bold lg:text-[60px] font-secondary uppercase leading-[1]'
          >
            <span className='gold'>EUPHORIA</span>
          </h1>
          <p className='text-accent font-semibold mb-6 text-base lg:text-xl'>THE GRAND KITCHEN CARNIVAL</p>
          <div className='mb-6 text-[30px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4'>Sizzle & Spice:</span>
            <TypeAnimation 
              sequence={['Welcome to Kitchen Carnival', 2000, 'Indulge your taste buds in a culinary adventure', 2000, 'Get ready for a kitchen Carnival like no other', 2000]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p className='mb-8 max-w-full mx-auto font-medium lg:mx-0'>
            Euphoria 2k23 is a celebration of culinary arts and gastronomy, features 15 food counters that will offer a variety 
            of dishes from different cuisines & regions. You can enjoy mouth-watering delicacies such as biriyani, 
            kebabs, pizzas, burgers, pastas, salads, sandwiches, soups, desserts, beverages and more at affordable prices. The 
            carnival will also have cultural programs, pro-shows, fun activities and games for the visitors, such as cooking 
            competitions, quizzes, lucky draws, and live music. Euphoria is a great opportunity to experience the hospitality and 
            creativity of our students and staff, as well as to indulge in some delicious food and entertainment.
          </p>
          <div className='cursor-pointer'>
            <Link to='about' className='text-gradient btn-link' >Our programs</Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
