"use client"
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import { once } from 'events';
import { fade } from '@/variants';
import {motion} from "framer-motion"

const Banner: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true
  };

  const Data = [
    {
      id: 0,
      img: "/banner1.jpg",
      Title: "First Banner",
      mainTitle: "LATEST FASHION SHOW",
      Price: "$9"
    },
    {
      id: 1,
      img: "/banner2.png",
      Title: "New Trends",
      mainTitle: "SUMMER STYLE",
      Price: "$9"
    },
    
    {
      id: 2,
      img: "/banner3.png",
      Title: "First Banner",
      mainTitle: "LATEST FASHION SHOW",
      Price: "$9"
    },
    {
      id: 3,
      img: "/banner4.JPG",
      Title: "New Arrival",
      mainTitle: "Limited Edition",
      Price: "$9"
    },
    
  ];

  return (
    <motion.div
    variants={fade({direction:"up", delay:0.7})}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.5}}
     id="Banner"  className='container pt-6 lg:pt-0'>
      <Slider {...settings}>
        {Data.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.Title}
            mainTitle={item.mainTitle}
            price={item.Price}
          />
        ))}
      </Slider>
    </motion.div>
  );
};

export default Banner;
