"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import Image from "next/image";
import logo1 from "../../../public/logo1 (2).png";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Signup');
  };

  const handleClick1 = () => {
    router.push('/Signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-0">
      <div className="bg-white rounded-2xl shadow-3xl flex flex-col sm:flex-row w-full sm:w-2/3 max-w-3xl mt-10 sm:mt-20 mb-10">
        <div className="w-full sm:w-3/5 p-4 mt-5">
          <div className="text-left font-bold">
            <div className="flex justify-center items-center">
              <Image src={logo1} alt="Logo" className="w-[90px]" />
            </div>
            <div className="py-1 text-center">
              <h1 className="text-3xl font-bold text-gray-600 mb-2">
                SignIn <span className="text-sm"> Start New Journey</span>
              </h1>
              <div className="border-2 w-14 border-gray-700 inline-block mb-2"></div>
              <p className="text-gray-400 my-3 font-serif">
                Fill Out These Input
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <input
                    type="date"
                    name="dob"
                    placeholder="DD/MM/YYYY" 
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3 text-gray-400">
                  <select
                    name="gender"
                    className="bg-gray-100 outline-none text-sm w-full"
                  >
                    <option value="" disabled selected hidden>
                      Select Gender
                    </option>
                    <option value="male" className="font-mono">
                      Male
                    </option>
                    <option value="female" className="font-mono">
                      Female
                    </option>
                    <option value="non-binary" className="font-mono">
                      Non-binary
                    </option>
                    <option value="prefer-not-to-say" className="font-mono">
                      Prefer not to say
                    </option>
                    <option value="other" className="font-mono">
                      Other
                    </option>
                  </select>
                </div>
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    name="cellNumber"
                    placeholder="Cell Number"
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <MdLockOutline className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1 w-full"
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-48 p-2 flex items-center gap-2 mb-3">
                  <MdLockOutline className="text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-gray-100 outline-none text-sm flex-1 w-full"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full mb-10 mt-5">
                <div className="flex justify-between w-full sm:w-64">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember Me
                  </label>
                  <a href="#" className="text-xs text-gray-300">
                    Forgot Password
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="border-2 border-gray-600 rounded-full px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-gray-700 hover:text-white"
               onClick={handleClick1}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full sm:w-2/5 bg-gray-600 text-white rounded-bl-2xl rounded-br-2xl sm:rounded-tr-2xl sm:rounded-br-2xl py-20 sm:py-36 px-12 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RocyUyMHN0b3JlfGVufDB8fDB8fHww')",
          }}
        >
          <div className="text-2xl font-bold font-serif text-white mb-1">
            Dress like you are already famous.
          </div>
          <div className="border-2 w-10 border-white inline-block mb-10 sm:mb-20"></div>
          <div className="mt-auto">
            <p className="mb-5 sm:mb-10 text-sm font-extrabold">
              Have you already an account? Then click the sign up button.
            </p>
            <a
              href="#"
              className="border-2 text-center border-white rounded-full px-8 sm:px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-white hover:text-black"
              onClick={handleClick}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
