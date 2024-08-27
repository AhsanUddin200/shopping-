import React from "react";
import ProductCard from "./ProductCard";


const Products = () => {
  const itemsdata = [
    {
      img: "/shirts.jpg",
      title: "Shirts",
      desc: "Versatile shirts many styles & fabrics.",
      rating: 3,
      price: "5.90",
      gender: "men",
    },
    {
      img: "/Tshirts.jpeg",
      title: "T-Shirts",
      desc: "Comfortable, casual shirt short sleeves.",
      rating: 4,
      price: "24.80",
      gender: "men",
    },
    {
      img: "/shalwar kameez.webp",
      title: "Shalwar Qameez",
      desc: "Traditional attire consisting long tunic.",
      rating: 4,
      price: "33.26",
      gender: "men",
    },
    {
      img: "/pant.jpeg",
      title: "Pants",
      desc: "Comfortable pants for everyday wear.",
      rating: 2,
      price: "19.30",
      gender: "men",
    },
    // Woman Products
    {
      img: "/woman T-Shirt.jpg",
      title: "Woman T-Shirt",
      desc: "A casual, short-sleeved.",
      rating: 5,
      price: "9.90",
      gender: "women",
    },
    {
      img: "/woman.jpg",
      title: "Shalwar & kameez",
      desc: "Long (kameez) & pants (shalwar).",
      rating: 4,
      price: "12.90",
      gender: "women",
    },
    {
      img: "/saree.jpg",
      title: "Saree",
      desc: "A long piece of fabric draped elegantly.",
      rating: 4,
      price: "8.90",
      gender: "women",
    },
    {
      img: "/burqa.webp",
      title: "Burqa",
      desc: "Traditional garment covers head to toe.",
      rating: 5,
      price: "15.90",
      gender: "women",
    },
    // For Kids
    {
      img: "/kids shirt.webp",
      title: "Shirts",
      desc: "Comfortable stylish shirts for boys.",
      rating: 3,
      price: "11.90",
      gender: "kids",
    },
    {
      img: "/k t-shirt1.jpg",
      title: "T-Shirts",
      desc: "T-shirts comfort and all-day wear.",
      rating: 4,
      price: "9.26",
      gender: "kids",
    },
    {
      img: "/kids.jpg",
      title: "Sleepwear",
      desc: "Boys comfortable cozy garment for sleepwear.",
      rating: 5,
      price: "17.90",
      gender: "kids",
    },
    {
      img: "/kids pant.webp",
      title: "Pants Jeans",
      desc: "Jeans durable made from denim fabric.",
      rating: 4,
      price: "19.90",
      gender: "kids",
    },
    // For Girls
    {
      img: "/girl1.webp",
      title: "Kurti",
      desc: "Kurti is a versatile garment.",
      rating: 4,
      price: "14.55",
      gender: "girls",
    },

    {
      img: "/girl2.webp",
      title: "Frock",
      desc: "Flattering silhouette, stylish fabrics.",
      rating: 1,
      price: "16.25",
      gender: "girls",
    },

    {
      img: "/girl3.webp",
      title: "Casuals",
      desc: "Casuals dress everyday  relaxed fabrics .",
      rating: 5,
      price: "19.90",
      gender: "girls",
    },

    {
      img: "/girls4.webp",
      title: "Maksi",
      desc: " Maksi  flowing dress elegance and comfort.",
      rating: 2,
      price: "45.10",
      gender: "girls",
    },
  ];

  const menProducts = itemsdata.filter((item) => item.gender === "men");
  const womenProducts = itemsdata.filter((item) => item.gender === "women");
  const kidsProducts = itemsdata.filter((item) => item.gender === "kids");
  const girlsProducts = itemsdata.filter((item) => item.gender === "girls");

  return (
    <div id="Products" className="container pt-16">
      <div className="font-serif text-3xl pb-4 text-gray-400 text-center">
        Our Products
      </div>
      <div className="text-center text-sm">FOR MEN</div>
      <div id="Products1" className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
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
      <div className="text-center text-sm mt-10">FOR WOMEN</div>
      <div id="Products2" className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
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
      <div className="text-center text-sm mt-10">FOR BOYS</div>
      <div id="Products3" className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
        {kidsProducts.map((item, index) => (
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
      <div className="text-center text-sm mt-10">FOR GIRLS</div>
      <div id="Products4" className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 px-4 mt-6 mb-8">
        {girlsProducts.map((item, index) => (
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
