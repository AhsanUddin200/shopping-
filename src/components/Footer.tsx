"use client";
import React, { Component } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { fade } from '@/variants';

const Footer = () => {
  return (
    <>
      <div className="w-full h-2/5 ">
        <div className="px-24 flex flex-col sm:flex-row bg-black text-white gap-24 dark:bg-dark">
          <motion.div
            variants={fade({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" space-y-4 mb-5"
          >
            <h1 className="font-bold text-xl underline decoration-yellow-600 ">
              Company
            </h1>
            <div className="font-mono space-y-4">
              {/* <h2 className="font-thin text-lg">Mission Statment</h2> */}
              <div className="font-thin text-lg">
                <Typewriter
                  words={["Mission Statment", "Mission Statment"]}
                  loop={true}
                  cursor
                  cursorStyle="..."
                />{" "}
              </div>
              <p>
                FashionFolio mission is to blend tradition and modernity in
                high-quality garments that showcase Pakistan&apos;s rich cultural
                heritage. We empower individuals through our designs, promoting
                confidence and self-expression, while committing to
                sustainability, ethical practices, and community engagement
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fade({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col sm:flex-row bg-black text-white"
          >
            <div className=" space-y-4   dark:bg-dark">
              <h1 className="font-bold text-xl underline decoration-yellow-600">
                Company
              </h1>
              <div className="font-mono space-y-4">
                <p>About Us</p>
                <p>Services</p>
                <p>Privacy </p>
                <p>Policy</p>
                <p>Program</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fade({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col sm:flex-row bg-black text-white gap-24"
          >
            <div className=" space-y-4  dark:bg-dark">
              <h1 className="font-bold text-xl underline decoration-yellow-600">
                Categories
              </h1>
              <div className="font-mono space-y-4">
                <p>MAN</p>
                <p>Woman</p>
                <p>Baby</p>
                <p>Baba</p>
                <p>Infant</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fade({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col sm:flex-row bg-black text-white gap-24"
          >
            <div className="space-y-4 dark:bg-dark">
              <h1 className="font-bold text-xl inline-block border-b-2 border-yellow-600">
                Help
              </h1>
              <div className="font-mono space-y-4">
                <p>FAQs</p>
                <p>Return</p>
                <p>Order </p>
                <p> Options</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fade({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col sm:flex-row bg-black text-white"
          >
            <div className=" dark:bg-dark">
              <h1 className="font-bold text-xl inline-block border-b-2 border-yellow-600">
                Reach Us
              </h1>
              <div className="flex gap-5 mt-4 dark:bg-dark">
                <ImWhatsapp className="scale-125" />
                <CgInstagram className="scale-125" />
                <SiDiscord className="scale-125" />
                <AiFillFacebook className="scale-125" />
              </div>
              <div className="mt-5 font-semibold">Email</div>
              <p className="bg-white text-black px-4 rounded-lg mt-3 text-sm font-serif">
                {" "}
                FashionFolio2024@gmail.com
              </p>
              <div className="mt-4 font-semibold">Site Address</div>
              {/* <p className="  px-2 rounded-lg mt-2 text-sm font-mono">
                {" "}
                Survey Nos. 36 and 112 Deagu, South Korea
              </p> */}
              <div className="px-2 rounded-lg mt-2 text-sm font-mono">
                <Typewriter
                  words={[" 184, gulshan avenue, gulshan 2, 121, Dhaka, Bangladesh", ""]}
                  loop={true}
                  cursor
                  cursorStyle=".."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
