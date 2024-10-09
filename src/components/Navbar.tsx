"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { PiHamburger } from "react-icons/pi";
import { useRouter } from "next/navigation";

import { fade } from "@/variants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const gentsClick = () => {
    router.push("/gentsk");
  };

  const gentsClick1 = () => {
    router.push("/gentpant");
  };

  const gentsClick2 = () => {
    router.push("/gentshirt");
  };
  return (
    <>
      <div>
        <div className="lg:hidden dark:bg-dark ">
          <div className="container flex justify-between items-center py-5 px-4">
            {/* <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className='text-blackish dark:text-white'
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor"   
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button> */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black dark:text-white"
            >
              <PiHamburger
                className={`w-6 h-6 transition-transform duration-200 ${
                  menuOpen ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
          {menuOpen && (
            <div className="bg-white dark:bg-dark">
              <motion.div
                variants={fade({ direction: "down", delay: 0.3 })}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center py-5 text-blackish dark:text-white"
              >
                <ScrollLink
                  activeClass="active"
                  to="Banner"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  HOME
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="Products1"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  MEN&apos;S
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="Products2"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={800}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  WOMEN&apos;S
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="Products3"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={800}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  KIDS
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="Products4"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={900}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  GIRLS
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="Products"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  CATEGORIES
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="SalesOffer"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  SALES OFFER
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="Testimonail"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={900}
                  className="navbar__link py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  TESTIMONIALS
                </ScrollLink>
              </motion.div>
            </div>
          )}
        </div>

        <div className="hidden lg:block dark:bg-dark">
          <div className="container">
            <motion.div
              variants={fade({ direction: "down", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex w-fit gap-12 mx-auto font-semibold py-5 text-blackish"
            >
              <ScrollLink
                activeClass="active"
                to="Banner"
                spy={true}
                offset={-50}
                smooth={true}
                duration={500}
                className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
              >
                HOME
              </ScrollLink>

              <div className="relative group">
                <ScrollLink
                  activeClass="active"
                  to="Products1"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                  className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
                >
                  MEN&apos;S
                </ScrollLink>
                <div className="absolute left-0 z-10 hidden group-hover:block mt-1 font-normal bg-white divide-y divide-gray-100 rounded-xl shadow w-32 dark:bg-gray-200 dark:divide-gray-900">
                  <ul
                    className="py-2 text-sm text-black dark:text-gray-900"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default link behavior
                          gentsClick();
                        }}
                      >
                        Shalwar Qameez
                      </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default link behavior
                          gentsClick1();
                        }}
                      >
                        Pants
                      </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default link behavior
                          gentsClick2();
                        }}
                      >
                       
                      
                        Shirt
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        T-Shirt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <ScrollLink
                  activeClass="active"
                  to="Products2"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={800}
                  className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
                >
                  WOMEN&apos;S
                </ScrollLink>
                <div className="absolute left-0 z-10 hidden group-hover:block mt-1 font-normal bg-white divide-y divide-gray-100 rounded-xl shadow w-32 dark:bg-gray-200 dark:divide-gray-900">
                  <ul
                    className="py-2 text-sm text-black dark:text-gray-900"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Kurta Paijama
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Saree
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Burqa
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        T-Shirt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <ScrollLink
                activeClass="active"
                to="Products3"
                spy={true}
                offset={-50}
                smooth={true}
                duration={800}
                className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
              >
                KIDS
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="Products4"
                spy={true}
                offset={-50}
                smooth={true}
                duration={900}
                className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
              >
                GIRLS
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="Products"
                spy={true}
                offset={-50}
                smooth={true}
                duration={700}
                className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
              >
                CATEGORIES
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="SalesOffer"
                spy={true}
                offset={-50}
                smooth={true}
                duration={700}
                className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
              >
                SALES OFFER
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="Testimonail"
                spy={true}
                smooth={true}
                offset={-50}
                duration={900}
                className="navbar__link relative underline:transition-pink-800 cursor-pointer dark:text-white"
              >
                TESTIMONIALS
              </ScrollLink>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
