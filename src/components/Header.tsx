import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import Theme from "./Theme";
const Header = () => {
  return (
    <>
      <div>
        <div className="border-b border-gray-400 hidden sm:block">
          <div className="container py-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <select
                  className="text-gray-600 text-[14px] w-[70px]"
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
                  className="text-gray-600 text-[14px] w-[80px]"
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
              <div className="text-gray-600 text-[14px]">
                <b>GAALA SALE</b> THIS WEEKEND ORDER OVER NOW!!
              </div>
              <div className="hidden  lg:flex gap-5">
                <div className="header__icon_wrapper">
                  <AiFillFacebook />
                </div>
                <div className="header__icon_wrapper">
                  <SiDiscord />
                </div>

                <div className="header__icon_wrapper">
                  <CgInstagram />
                </div>

                <div className="header__icon_wrapper">
                  <ImWhatsapp />
                </div>

                <div>
                  <Theme />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
