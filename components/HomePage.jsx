import React from 'react'
import Orphan from '../public/assets/orphans.jpg';
import Image from 'next/image';


const HomePage = () => {
  return (
    <div id='main' className='max-w-[1240px] mx-auto p-4 text-center'>
    <div className='max-h-[800px] relative'>

      <div className='absolute w-full h-full max-h-[800px] text-gray-200 bg-black/50 flex flex-col justify-center'>
        <h1 className='PX-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest'>(R.A.G.E)<span className='text-orange-600 tracking-widest'>Rights and Aid</span></h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-orange-600'>Group for <span className='tracking-widest text-gray-200'>Education</span></h1>
      </div>

      <Image className='w-full max-h-[800px] object-cover' src={Orphan} alt='' />
    </div>
    </div>
  )
};

export default HomePage;
