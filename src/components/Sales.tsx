"use client";
import React from "react";
import Image from "next/image";
import sale1 from "../../public/sale1.jpeg";
import sale2 from "../../public/sale2.jpg";
import { useState, useEffect } from "react";

export default function Sales() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeOut = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 9000);

    return () => {
      clearTimeout(showTimeOut);
      clearTimeout(hideTimeout);
    };
  });

  return (
    <>
      
   
      <div id="SalesOffer" className="font-serif text-3xl pb-4 text-gray-400 text-center">
      Sales Offer
      </div>
      <div className="text-center text-sm"> Men,Woman,Boys & Girls</div>

      <div className=" flex px-8 bg-gray-300 sm:px-4 flex-col sm:flex-row sm:mt-8 justify-center items-center mb-12 rounded-2xl shadow-2xl w-full min-h-screen   ">
        {visible && (
          <div className=" bg-red-600  w-25 text-gray-400 text-center px-3 sm:px-0 rounded-b-2xl sm:rounded-e-2xl font-bold text-xl h-full">
            <p>Flat 50% off</p>
          </div>
        )}

        <div className="flex md:flex-row sm:flex-col gap-8 ">
          <div className="mb-2 mt-24 sm:mt-12 sm:px-16 lg:px-16 ">
            <Image
            
              src="https://images.unsplash.com/photo-1631005438015-a2d58390d01e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sale offer"
              width={500}
              height={200}
              className="w-full sm:w-auto rounded-md hover:blur-sm "
            />
 <div className="flex gap-4 ">
              <del className="mt-2 text-center text ml-10 sm:ml-32" >$126</del>
              <p className="mt-2 text-center font-bold">${parseInt(126 / 2)}</p>
              </div>
              <button className="border border-gray-400  hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white ml:[66px] sm:ml-[140px]">
                Shop
              </button>
           
          </div>

          <div className="flex flex-col justify-center items-center gap-6 mt-1">
            <div className="flex flex-col sm-flex-row items-center">
              <Image
                 className=" rounded-md "
                src="https://images.pexels.com/photos/7139722/pexels-photo-7139722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="sale offer"
                width={200}
                height={100}
              />
              
              <div className="flex gap-4">
              <del className="mt-2 text-center text">$55</del>
              <p className="mt-2 text-center font-bold">${parseInt(55/2) }</p>
              </div>
              <button className="border border-gray-400  hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white">
                Shop
              </button>
         


            </div>
            <div className="flex flex-col items-center">
              <Image
              className="rounded-md "
                src="https://images.pexels.com/photos/18571715/pexels-photo-18571715/free-photo-of-child-model-posing-in-bow-tie-and-suspenders.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="sale offer"
                width={200}
                height={100}
              />
                <div className="flex gap-4">
              <del className="mt-2 text-center text ">$67</del>
              <p className="mt-2 text-center font-bold">${parseInt(67/2) }</p>
              </div>
              <button className="border border-gray-400  hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white">
                Shop
              </button>
            </div>
          </div>

          <div className="hidden sm:flex flex-col sm:flex-row sm:px-12 justify-center items-center gap-12 mt-1">
  <div className="flex flex-col items-center max-w-xs sm:max-w-sm">
    <Image
      className="w-24 sm:w-32 h-32 sm:h-48 object-cover rounded-md"
      src="https://images.pexels.com/photos/19664801/pexels-photo-19664801/free-photo-of-little-boy-in-vest-and-white-shirt-standing-on-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="sale offer"
      width={200}
      height={100}
    />
    <div className="flex gap-4 mt-2 text-center">
      <del className="text-gray-500">$100</del>
      <p className="font-bold">${parseInt(100 / 2)}</p>
    </div>
    <button className="mt-2 border border-gray-400 hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white">
      Shop
    </button>
  </div>

  <div className="flex flex-col items-center max-w-xs sm:max-w-sm">
    <Image
      className="w-24 sm:w-72 h-32 sm:h-96 rounded-md"
      src="https://images.pexels.com/photos/20777176/pexels-photo-20777176/free-photo-of-model-in-a-red-traditional-dress-and-an-embroidered-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="sale offer"
      width={200}
      height={100}
    />
    <div className="flex gap-4 mt-2 text-center">
      <del className="text-gray-500">$96</del>
      <p className="font-bold">${parseInt(96) - 48}</p>
    </div>
    <button className="mt-2 border border-gray-400 hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white">
      Shop
    </button>
  </div>

  <div className="flex flex-col items-center max-w-xs sm:max-w-sm">
    <Image
      className="w-24 sm:w-32 h-32 object-cover rounded-md"
      src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="sale offer"
      width={400}
      height={100}
    />
    <div className="flex gap-4 mt-2 text-center">
      <del className="text-gray-500">$81</del>
      <p className="font-bold">${parseInt(81 / 2)}</p>
    </div>
    <button className="mt-2 border border-gray-400 hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white">
      Shop
    </button>
  </div>
</div>

        </div>

        <div className="px-12 text-center">
          <Image
           
            src="https://images.unsplash.com/photo-1710868941935-4ecf76ce8a6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sale offer"
            width={500}
            height={500}
            className="object-cover rounded-md hover:blur-sm"
          />
         
           <div className="flex gap-4 ">
              <del className="mt-2 text-center text ml-12 sm:ml-32 " >$112</del>
              <p className="mt-2 text-center font-bold">${parseInt(112/2) }</p>
              </div>
              <button className="border border-gray-400  hover:border-transparent px-3 rounded-md hover:bg-red-500 text-black hover:text-white ml-2">
                Shop
              </button>
              
        </div>
      </div>
    </>
  );
}
