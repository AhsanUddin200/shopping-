import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa6";
export default function Login() {
  return (
    <>
   
      <div className="flex flex-col items-center w-full flex-1 px-20 text-center bg-gray-800">
        <div className="bg-white rounded-2xl shadow-3xl flex w-2/3 max-w-3xl">
        <div className="w-3/5 p-4">Sign in
        <div className="text-left font-bold">
          <span className="text-gray-600">FashionFolio</span>
          <div className="py-10 text-center">
            <h1 className="text-3xl font-bold text-gray-600 mb-2 ">Sign Into Account</h1>
            <div className="border-2 w-14 border-gray-700 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-700  p-3 mx-1 rounded-full"> 
                <FaFacebookF className="text-sm"/>
                 </a>

                 <a href="#" className="border-2 border-gray-700  p-3 rounded-full"> 
                <FaLinkedinIn className="text-sm"/>
                 </a>

                 <a href="#" className="border-2 border-gray-700  p-3 mx-1 rounded-full"> 
                <FaGoogle className="text-sm"/>
                 </a>
            </div>
          </div>
        </div>

        
        
        
        </div>
        <div className="w-2/5 bg-gray-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">Sign in
        
        <div className="text-3xl font-bold mb-2"> LOGO here</div>
        <div className="border-2 w-10 border-white inline-block mb-2 "></div>
        <p className="mb-10">Fill Up The Personal Information And Start Journey With Us</p>
        <a href="#" className="border-2 border-white rounded-full px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-white hover:text-black">SignUp</a>
        </div>



        
        </div>
      </div>
      
    </>
  );
}
