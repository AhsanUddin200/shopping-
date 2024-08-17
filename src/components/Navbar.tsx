"use client"
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react';

const Navbar = () => {
  
  return (
  <>
  <div >

    <div className='hidden lg:block'>
        <div className='container'>

            <div className='flex w-fit gap-12 mx-auto font-semibold py-5 text-blackish'>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">HOME</Link>
        
                <div className="relative group">
                <Link className="navbar__link relative underline:transition-pink-800" href="#">
                  MEN'S
                </Link>
                <div className="absolute left-0 z-10 hidden group-hover:block mt-2 font-normal bg-white divide-y divide-gray-100 rounded-xl shadow w-32 dark:bg-gray-200 dark:divide-gray-900">
                  <ul className="py-2 text-sm text-black dark:text-gray-900" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">WOMEN'S</Link>
                
                <Link className="navbar__link relative underline:transition-pink-800" href="#">INFANT</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">BABY</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">BABA</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">CATEGORIES</Link>

                <Link className="navbar__link relative underline:transition-pink-800" href="#">SELL OFFER</Link>

            </div>

        </div>
    </div>
  </div>
  </>
  )
}

export default Navbar
