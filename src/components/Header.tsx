import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
const Header = () => {
  return (
    <>
    <div>
        <div className='border-b border-gray-400 hidden sm:block'>
           
           <div className='container py-4'>

            <div className='flex justify-between items-center'>

                <div className='hidden lg:flex gap-3'>

                   <div className="header__icon_wrapper">
                   <AiFillFacebook />
                   </div>
                   <div className="header__icon_wrapper">
                   <SiDiscord />
                   </div>

                   <div className="header__icon_wrapper">
                   <CgInstagram />
                   </div>

                   <div className="header__icon_wrapper">
                   <ImWhatsapp />
                   </div>
                 
                </div>

                <div className='text-gray-600 text-[14px]'>
                    <b>GAALA SALE</b> THIS WEEKEND ORDER OVER NOW!!

                </div>

            </div>

           </div>
        </div>
      
    </div>
    </>
  )
}

export default Header

