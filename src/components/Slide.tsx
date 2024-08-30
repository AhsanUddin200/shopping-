import React from 'react';
import variants from '@variants';
import { once } from 'events';
import { fade } from '@/variants';
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-noun border-none relative'>
      <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        {/* <h2 className='text-accent text-xl lg:text-[25px]'>{title}</h2> */}
        {/* <h3 className='text-blackish text-[12px] md:text-[20px] lg:text-[30px] font-bold leading-3' >{mainTitle}</h3> */}
        {/* <p>{price}</p> */}

        <div className='bg-yellow-300 sm:mb-4 md:mt-24 lg:mt-36 text-white text-[13px] md:text-[15px] p-1 sm:p-3 rounded-lg inline-block cursor-pointer hover:bg-red-800'>
          Shop Now
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Image 
          src={img} 
          alt={title} 
          width={1400} 
          height={300} 
          className='w-full object-cover' // Added `object-cover` for better image handling
        />
      </div>
    </div>
  );
};

export default Slide;
