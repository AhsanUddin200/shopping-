import React from "react";

const Products = () => {
  const itemsdata = [
    {
      img: "/photo1.png",
      title: "Cloths",
      decs: "Baby Frog -White",
      rating: 5,
      price: "$5.90",
    },

    {
      img: "/photo2.png",
      title: "Watch",
      decs: "Smart Watch For Man",
      rating: 2,
      price: "$9.00",
    },

    {
      img: "/photo3.png",
      title: "Cloths",
      decs: "Pant",
      rating: 9,
      price: "$3.90",
    },
  ];

  return (
    <>
      <div className="container pt-16">
        <div className="font-serif text-3xl pb-4 text-gray-400">
          Our Products
        </div>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20 ">

         {
            itemsdata.map((items,index)=>(
                <ProductCard 
                key={index}
                img={items.img}
                title={items.title}
                decs={items.decs}
                rating={items.rating}
                price={items.price} />
            ))
         }
        </div>
      </div>
    </>
  );
};

export default Products;
