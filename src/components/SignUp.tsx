import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import Image from "next/image";
import logo1 from '../../public/logo1 (2).png'
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col items-center w-full flex-1 px-20 text-center bg-gray-800">
        <div className="bg-white rounded-2xl shadow-3xl flex w-2/3 max-w-3xl">
          <div className="w-3/5 p-4 mt-5">
           
            <div className="text-left font-bold">
             <div className="flex justify-center items-center">
              <Image
                src={logo1}
                alt="Description of the image"
             
                className=" w-[90px]  "
              />
              </div>
              
              <div className="py-1 text-center">
                <h1 className="text-3xl font-bold text-gray-600 mb-2 ">
                  Sign Into Account
                </h1>
                <div className="border-2 w-14 border-gray-700 inline-block mb-2"></div>
                <div className="flex justify-center my-1 gap-4">
                  <a
                    href="#"
                    className="border-2  border-gray-700  p-3  rounded-full"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>

                  <a
                    href="#"
                    className="border-2 border-gray-700 mx-1 p-3 rounded-full"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>

                  <a
                    href="#"
                    className="border-2 border-gray-700  p-3  rounded-full"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="text-gray-400 my-3 font-serif">
                  or use email account
                </p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center gap-2 mb-3">
                    <FaRegEnvelope className="text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center gap-2">
                    <MdLockOutline className="text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-10 mt-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remeber" className="mr-1" />{" "}
                      Remember Me
                    </label>
                    <a href="#" className="text-xs text-gray-300">
                      Forget Password
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="  border-2 border-gray-600 rounded-full px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-gray-700 hover:text-white"
                >
                  SignUp
                </a>
              </div>
            </div>
          </div>
          <div
  className="w-2/5 bg-gray-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 bg-cover bg-center "
  style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1673320566699-de2dd80f2d0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", }}
>
  
   <div className="text-xl font-bold font-serif  text-gray-900 mb-1">Fashion is bought, style is made.</div>
  <div className="border-2 w-10 border-white inline-block mb-20"></div>
  <div className="mt-auto">
    
  <p className="mb-10 text-sm font-extrabold ">
    Fill Up The Personal Information And Start Journey With Us
  </p>
  <div>
  <Link href="/SignIn" className="border-2 border-white rounded-full px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-white hover:text-black">
                SignIn
              </Link> 
    </div>
  
  
  </div>
</div>

        </div>
      </div>
    </>
  );
}
