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
      gender: "men",
    },
    {
      img: "/Tshirts.jpeg",
      title: "T-Shirts",
      desc: " ",
      rating: 3,
      price: "$9.00",
      gender: "men",
    },
    {
      img: "/shalwar kameez.webp",
      title: "Shalwar Qameez",
      desc: "",
      rating: 4,
      price: "$3.90",
      gender: "men",
    },
    {
      img: "/pant.jpeg",
      title: "Pants",
      desc: "",
      rating: 2,
      price: "$9.90",
      gender: "men",
    },
    {
      img: "/woman T-Shirt.jpg",
      title: "Cloths and Kapray",
      desc: "A casual, short-sleeved.",
      rating: 5,
      price: "$9.90",
      gender: "women",
    },
    // Add more women products here
    {
      img: "/woman.jpg",
      title: "Women Dress",
      desc: "Long (kameez) & pants (shalwar).",
      rating: 4,
      price: "$12.90",
      gender: "women",
    },
    {
      img: "/saree.jpg",
      title: "Saree",
      desc: "A long piece of fabric  draped elegantly",
      rating: 4,
      price: "$8.90",
      gender: "women",
    },
    {
      img: "/burqa.webp",
      title: "Women Jacket",
      desc: "Traditional garment covers head to toe",
      rating: 5,
      price: "$15.90",
      gender: "women",
    },
  ];

  const menProducts = itemsdata.filter(item => item.gender === "men");
  const womenProducts = itemsdata.filter(item => item.gender === "women");

  return (
    <div className="container pt-16">
      <div className="font-serif text-3xl pb-4 text-gray-400 text-center">
        Our Products
      </div>
      <div className="text-center text-sm">
        FOR MEN
      </div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
        {menProducts.map((item, index) => (
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
      <div className="text-center text-sm mt-10">
        FOR WOMEN
      </div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
        {womenProducts.map((item, index) => (
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
