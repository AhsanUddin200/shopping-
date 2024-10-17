"use client";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { fade } from '@/variants';

const Footer = () => {
  return (
    <div
      className="w-full h-2/5 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Updated background image URL
    >
      <div className="px-24 flex flex-col sm:flex-row bg-gray-800 bg-opacity-70 text-white gap-24 py-10">
        
        <motion.div
          variants={fade({ direction: "right", delay: 0.3 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-4 mb-5"
        >
          <h1 className="font-bold text-xl underline decoration-yellow-600 mt-5"></h1>
          <div className="font-mono space-y-4">
            <div className="font-thin text-lg">
              <Typewriter
                words={["Mission Statement"]}
                loop={true}
                cursor
                cursorStyle="..."
              />{" "}
            </div>
            <p>
              FashionFolio's mission is to blend tradition and modernity in
              high-quality garments that showcase Pakistan's rich cultural
              heritage. We empower individuals through our designs, promoting
              confidence and self-expression, while committing to
              sustainability, ethical practices, and community engagement.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fade({ direction: "left", delay: 0.3 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col sm:flex-row"
        >
          <div className="space-y-4">
            <h1 className="font-bold text-xl underline decoration-yellow-600 mt-5">
              Company
            </h1>
            <div className="font-mono space-y-4">
              <p>About Us</p>
              <p>Services</p>
              <p>Privacy</p>
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
          className="flex flex-col sm:flex-row"
        >
          <div className="space-y-4">
            <h1 className="font-bold text-xl underline decoration-yellow-600 mt-5">
              Categories
            </h1>
            <div className="font-mono space-y-4">
              <p>MAN</p>
              <p>WOMAN</p>
              <p>BABY</p>
              <p>BABA</p>
              <p>INFANT</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fade({ direction: "left", delay: 0.3 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col sm:flex-row"
        >
          <div>
            <h1 className="font-bold text-xl inline-block border-b-2 border-yellow-600 mt-5">
              Help
            </h1>
            <div className="font-mono space-y-4">
              <p>FAQs</p>
              <p>Return</p>
              <p>Order</p>
              <p>Options</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fade({ direction: "left", delay: 0.3 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col sm:flex-row"
        >
          <div>
            <h1 className="font-bold text-xl inline-block border-b-2 border-yellow-600 mt-5">
              Reach Us
            </h1>
            <div className="flex gap-5 mt-4">
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                <ImWhatsapp className="scale-125" />
              </a>
              <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                <CgInstagram className="scale-125" />
              </a>
              <a href="https://discord.gg/yourdiscordlink" target="_blank" rel="noopener noreferrer">
                <SiDiscord className="scale-125" />
              </a>
              <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook className="scale-125" />
              </a>
            </div>
            <div className="mt-5 font-semibold">Email</div>
            <p className="bg-white text-black px-4 rounded-lg mt-3 text-sm font-serif">
              FashionFolio2024@gmail.com
            </p>
            <div className="mt-4 font-semibold">Site Address</div>
            <div className="px-2 rounded-lg mt-2 text-sm font-mono">
              <Typewriter
                words={["184, Gulshan Avenue, Gulshan 2, 121, Dhaka, Bangladesh", ""]}
                loop={true}
                cursor
                cursorStyle=".."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
