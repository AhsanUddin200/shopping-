import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import Theme from "./Theme";
import { motion } from 'framer-motion';
import { fade } from '@/variants';

// Select component for currency and language
const SelectInput = ({ options, name, width }) => (
  <select className={`text-gray-600 text-[14px] w-[${width}] rounded-md`} name={name}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const Header = () => {
  const currencyOptions = [
    { value: "$ USD", label: "$ USD" },
    { value: "€ EURO", label: "€ EURO" },
    { value: "PKR", label: "PKR" },
    { value: "INR", label: "INR" },
    { value: "£ GBP", label: "£ GBP" },
    { value: "¥ JPY", label: "¥ JPY" },
    { value: "₽ RUB", label: "₽ RUB" },
    { value: "CAD", label: "CAD" },
    { value: "AUD", label: "AUD" },
    { value: "CHF", label: "CHF" },
  ];

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "German", label: "German" },
    { value: "French", label: "French" },
    { value: "Latin", label: "Latin" },
    { value: "Spanish", label: "Spanish" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
    { value: "Korean", label: "Korean" },
    { value: "Italian", label: "Italian" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Russian", label: "Russian" },
    { value: "Arabic", label: "Arabic" },
    { value: "Hindi", label: "Hindi" },
  ];

  return (
    <div className="dark:bg-dark border-b border-gray-400 hidden sm:block dark:text-white">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <SelectInput options={currencyOptions} name="currency" width="70px" />
            <SelectInput options={languageOptions} name="language" width="80px" />
          </div>
          <div className="text-gray-600 text-[14px] dark:text-white">
            <b>GAALA SALE</b> THIS WEEKEND ORDER OVER NOW!!
          </div>
          <motion.div
            variants={fade({ direction: "left", delay: 0.1 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="hidden lg:flex gap-5"
          >
            <div className="header__icon_wrapper">
              <a href="https://www.facebook.com/ahsan.nasir.509/" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook className="hover:scale-125" />
              </a>
            </div>
            <div className="header__icon_wrapper">
              <a href="https://www.instagram.com/uddin5958/" target="_blank" rel="noopener noreferrer">
                <CgInstagram className="hover:scale-125" />
              </a>
            </div>
            <div className="header__icon_wrapper">
              <SiDiscord className="hover:scale-125" />
            </div>
            <div className="header__icon_wrapper">
              <a href="https://wa.me/923102362190" target="_blank" rel="noopener noreferrer">
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
  );
};

export default Header;
