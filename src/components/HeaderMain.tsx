"use client"
import React from "react";
import Image from "next/image";
import Logo from "../../public/mylogo.png";
import { TbShoppingCartSearch } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo1 from '../../public/logo1 (2).png'
import { useState,useEffect } from "react";
import {fade} from "@/variants"

const HeaderMain = () => {
const placeholder = ['Men','Woman','Boys','Girls']
const [placeholderIndex ,setPlaceholderIndex] = useState(0)

useEffect (()=> {
  const interval = setInterval(()=> {
    setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholder.length)
  },4000)

  return () => clearInterval(interval)
},[placeholder.length])

  return (
    <>
      <div> 
        <div className="dark:bg-dark border-b border-gray-300 px-12 ">
          <div className="container sm:flex justify-between items-center ">
            <div className=" dark:text-white flex justify-center sm:justify-start font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
              <Image
                src={logo1}
                alt="Description of the image"
             
                className="px-8 w-[140px] hover:scale-150 "
              />
            </div>

            <div className="w-full sm:w-[330px] md:w-[50%] relative">
      <input
        className="border-gray-500 border p-2 px-5 rounded-xl w-full"
        type="text"
        placeholder={` ${placeholder[placeholderIndex]}`}
      />
      <TbShoppingCartSearch
        className="absolute right-0 top-0 mr-6 mt-2 text-gray-900"
        size={20}
      />
    </div>
            <div  className="space-x-4 flex  pr-5 ">
            <div className="hidden lg:flex text-gray-700 gap-0 text-[25px] hover:scale-110 dark:text-white ">
                <BiUser />
            </div>

            <div className="relative hidden lg:flex text-gray-700 gap-0 text-[25px] hover:scale-110 dark:text-white ">
                <FaHeartCirclePlus />
                <div className="bg-red-600 rounded-2xl absolute top-0 right-0 w-[10px] h-[15px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1 hover:scale-125"
                >5</div>

                
            </div>

            <div className="relative hidden lg:flex text-gray-700 gap-0 text-[25px] hover:scale-110 dark:text-white ">
                <HiOutlineShoppingBag />
                <div className="bg-red-600 rounded-2xl absolute top-0 right-0 w-[10px] h-[15px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1 hover:scale-125"
                >9</div>

                
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
