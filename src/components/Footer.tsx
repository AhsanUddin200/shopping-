import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <>
    <div className='w-full h-2/5 '>
    <div className=' px-48 flex flex-col  sm:flex-row bg-black text-white gap-24'>
        <div className='mt-5 space-y-4  mb-4'>
            <h1 className='font-bold text-xl underline decoration-yellow-600'>Company</h1>
            <div className='font-mono space-y-4  '>
           <p>Mission Statment</p>
            </div>
           
        </div>
<div className='flex flex-col sm:flex-row bg-black text-white gap-36'>
<div className='mt-5 space-y-4  mb-4'>
            <h1 className='font-bold text-xl underline decoration-yellow-600'>Get Help</h1>
            <div className='font-mono space-y-4 '>
            <p>FAQs</p>
            <p>Return</p>
            <p>Order Status</p>
            <p>Payments Options</p>
            </div>
        </div>
</div>


<div className='flex flex-col sm:flex-row bg-black text-white'>
<div className='mt-5 space-y-4  mb-4'>
            <h1 className='font-bold text-xl underline decoration-yellow-600'>Company</h1>
            <div className='font-mono space-y-4  '>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Privacy Policy</p>
            <p>Affilate Program</p>
            </div>
           
        </div>
</div>
<div className='flex flex-col sm:flex-row bg-black text-white gap-36'>
<div className='mt-5 space-y-4  mb-4'>
            <h1 className='font-bold text-xl underline decoration-yellow-600'>Categories</h1>
            <div className='font-mono space-y-4 '>
            <p>MAN</p>
            <p>Woman</p>
            <p>Baby</p>
            <p>Baba</p>
            <p>Infant</p>
            </div>
        </div>
</div>


<div className='flex flex-col sm:flex-row bg-black text-white'>
<div className='mt-5'>
            <h1>Company</h1>
            <div className='flex gap-5 mt-4'>
            <ImWhatsapp />
<CgInstagram />
 <SiDiscord />
 <AiFillFacebook />

            </div>
        </div>
</div>
    </div>


    </div>
    </>
  )
}

export default Footer
