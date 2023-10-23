import React from 'react';

const Contact = () => {
  return <section id='contact' className='section lg:mt-[800px]'>
    <div className='container mx-auto'>
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="h2 text-accent font-medium title-font mb-4">Contact Us</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500 font-semibold">example@email.com</a>
          <p class="leading-normal font-medium text-white my-5">Rajadhani Institute of Hotel Management & Catering Technology
            <br/>Nedumparambu P O, Nagaroor, Kerala 695102
          </p>
          <span class="inline-flex">
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
          <h2 className='text-gray-400 mt-5'>Contact Developer</h2>
          <p className='font-medium text-emerald-400'><a className='border hover:bg-emerald-500 hover:text-white border-emerald-400 py-1 px-2 rounded-full' href='https://agentsuperuser.github.io/'>Akash Susil</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  </section>;
};

export default Contact;
