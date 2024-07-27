import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const itemsdata = [
    {
      img: "/photo1.png",
      title: "Cloths",
      desc: "Baby Frog -White",
      rating: 5,
      price: "$5.90",
    },
    {
      img: "/photo2.png",
      title: "Watch",
      desc: "Smart Watch For Man",
      rating: 2,
      price: "$9.00",
    },
    {
      img: "/photo3.png",
      title: "Cloths",
      desc: "Pant",
      rating: 9,
      price: "$3.90",
    },
    {
      img: "/photo4.png",
      title: "Cloths",
      desc: "Pant And Shirt",
      rating: 10,
      price: "$9.90",
    },
  ];

  return (
    <div className="container pt-16">
      <div className="font-serif text-3xl pb-4 text-gray-400">
        Our Products
      </div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20">
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
