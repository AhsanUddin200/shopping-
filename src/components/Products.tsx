import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const itemsdata = [
    {
      img: "/shirts.jpg",
      title: "Shirts",
      desc: "",
      rating: 3,
      price: "$5.90",
    },
    {
      img: "/Tshirts.jpeg",
      title: "T-Shirts",
      desc: " ",
      rating: 3,
      price: "$9.00",
    },
    {
      img: "/shalwar kameez.webp",
      title: "Shalwar Qameez",
      desc: "",
      rating: 4,
      price: "$3.90",
    },
   
    {
      img: "/pant.jpeg",
      title: "Pants",
      desc: "",
      rating: 2,
      price: "$9.90",
    },

    {
      img: "/photo6.jpg",
      title: "Cloths and Kapray",
      desc: "",
      rating:5,
      price: "$9.90",
    },
  ];

  return (
    <div className="container pt-16">
      <div className="font-serif text-3xl pb-4 text-gray-400 text-center">
        Our Products
       
      </div>
      <div className="text-center text-sm">
      FOR MEN
      </div>
      <div className=" grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
        {itemsdata.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
