import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import Theme from "./Theme";
import {motion} from  'framer-motion';
import { once } from 'events';
import { fade } from '@/variants';

const Header = () => {
  return (
    <>
      <div className="">
        <div
       
        
        className="dark:bg-dark border-b border-gray-400 hidden sm:block dark:text-white ">
          <div className="container py-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <select
                  className="text-gray-600 text-[14px] w-[70px] rounded-md"
                  name="currency"
                >
                  <option value="$ USD">$ USD</option>
                  <option value="€ EURO">€ EURO</option>
                  <option value="PKR">PKR</option>
                  <option value="INR">INR</option>
                  <option value="£ GBP">£ GBP</option>
                  <option value="¥ JPY">¥ JPY</option>
                  <option value="₽ RUB">₽ RUB</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                  <option value="CHF">CHF</option>
                </select>

                <select
                  className="text-gray-600 text-[14px] w-[80px] rounded-md"
                  name="Language"
                >
                  <option value="English">English</option>
                  <option value="German">German</option>
                  <option value="French">French</option>
                  <option value="Latin">Latin</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Italian">Italian</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Russian">Russian</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="text-gray-600 text-[14px] dark:text-white ">
                <b>GAALA SALE</b> THIS WEEKEND ORDER OVER NOW!!
              </div>
              <motion.div
               variants={fade({direction:"left", delay:0.1})}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.2}}
       
               className="hidden  lg:flex gap-5">

                <div className="header__icon_wrapper">
                  <a href="https://www.facebook.com/ahsan.nasir.509/" target="_blank" rel="noopener noreferrer">
                  <AiFillFacebook  className="hover:scale-125" />
                  </a>
                </div>
                <div className="header__icon_wrapper">
                  <a href="https://www.instagram.com/uddin5958/" target="_blank" rel="noopener noreferrer">
                  
                  <CgInstagram   className="hover:scale-125" />
                  </a>
                </div>

                <div className="header__icon_wrapper">
                  < SiDiscord  className="hover:scale-125" />
                </div>

                <div className="header__icon_wrapper">
                  <a
                    href="https://wa.me/923102362190"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImWhatsapp className="hover:scale-125" />
                  </a>
                </div>

                <div>
                  <Theme />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
