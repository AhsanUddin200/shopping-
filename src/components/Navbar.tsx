"use client"
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  
  return (
  <>
  <div >

    <div className='hidden lg:block'>
        <div className='container'>

            <div className='flex w-fit gap-12 mx-auto font-semibold py-5 text-blackish'>

            <ScrollLink 
              activeClass="active" 
              to="Banner" 
              spy={true} 
              offset={-50} 
              smooth={true} 
              duration={500} 
              className="navbar__link relative underline:transition-pink-800 cursor-pointer"
            >
             HOME
            </ScrollLink>
        
                <div className="relative group">
                <Link className="navbar__link relative underline:transition-pink-800" href="#">
                  MEN'S
                </Link>
                <div className="absolute left-0 z-10 hidden group-hover:block mt-1 font-normal bg-white divide-y divide-gray-100 rounded-xl shadow w-32 dark:bg-gray-200 dark:divide-gray-900">
                  <ul className="py-2 text-sm text-black dark:text-gray-900" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Shalwar Qameez
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Pants
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Shirt
                      </a>
                    </li>

                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        T-Shirt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <Link className="navbar__link relative underline:transition-pink-800" href="#">
                  WOMEN'S
                </Link>
                <div className="absolute left-0 z-10 hidden group-hover:block mt-1 font-normal bg-white divide-y divide-gray-100 rounded-xl shadow w-32 dark:bg-gray-200 dark:divide-gray-900">
                  <ul className="py-2 text-sm text-black dark:text-gray-900" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Kurta Paijama
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Saree
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Burqa
                      </a>
                    </li>

                    <li>
                      <a href="#" className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        T-Shirt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

                
                
                

                <Link className="navbar__link relative underline:transition-pink-800" href="#">KIDS</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">GIRLS</Link>

                <ScrollLink 
              activeClass="active" 
              to="Products" 
              spy={true} 
              offset={-50} 
              smooth={true} 
              duration={500} 
              className="navbar__link relative underline:transition-pink-800"
            >
              CATEGORIES
            </ScrollLink>
                <Link className="navbar__link relative underline:transition-pink-800" href="#">SELL OFFER</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">TESTIMONAILS</Link>

            </div>

        </div>
    </div>
  </div>
  </>
  )
}

export default Navbar
