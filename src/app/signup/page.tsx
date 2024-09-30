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
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/SignIn");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-4 sm:p-0">
      <div className="bg-white rounded-2xl shadow-3xl flex flex-col sm:flex-row w-full sm:w-2/3 max-w-3xl mt-10 sm:mt-20 mb-10">
        <div className="w-full sm:w-3/5 p-4 mt-5">
          <div className="text-left font-bold">
            <div className="flex justify-center items-center">
              <Image src={logo1} alt="Logo" className="w-[90px]" />
            </div>
            <div className="py-1 text-center">
              <h1 className="text-3xl font-bold text-gray-600 mb-2">
                Sign Into Account
              </h1>
              <div className="border-2 w-14 border-gray-700 inline-block mb-2"></div>
              <div className="flex justify-center my-1 gap-4">
                <a href="#" className="border-2 border-gray-700 p-3 rounded-full">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-700 mx-1 p-3 rounded-full">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-700 p-3 rounded-full">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3 font-serif">or use email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center gap-2 mb-3">
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
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center gap-2 mb-3">
                  <MdLockOutline className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-full sm:w-64 mb-10 mt-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" /> Remember Me
                  </label>
                  <a href="#" className="text-xs text-gray-300">Forget Password</a>
                </div>
              </div>
              <a
                href="#"
                className="border-2 border-gray-600 rounded-full px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-gray-700 hover:text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full sm:w-2/5 bg-gray-600 text-white rounded-bl-2xl rounded-br-2xl sm:rounded-tr-2xl sm:rounded-br-2xl py-36 px-12 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="text-2xl font-bold font-serif text-white mb-1">
            Fashion is bought, style is made.
          </div>
          <div className="border-2 w-10 border-white inline-block mb-20"></div>
          <div className="mt-auto">
            <p className="mb-10 text-sm font-extrabold">
              Fill Up The Personal Information And Start Journey With Us
            </p>
            <div>
              <Link
                href="/SignIn"
                className="border-2 border-white rounded-full px-12 md:px-5 py-2 font-semibold hover:font-extrabold hover:bg-white hover:text-black"
                onClick={handleClick}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
