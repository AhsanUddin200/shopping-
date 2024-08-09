import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const generateRating = (rating: number) => {
  switch (rating) {
    case 1:
      return (
        <div className="flex gap-2 text-[25px] text-yellow-500">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 2:
      return (
        <div className="flex gap-none text-[25px]  text-yellow-500">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 3:
      return (
        <div className="flex gap-1 text-[25px]  text-yellow-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 4:
      return (
        <div className="flex gap-2 text-[25px]  text-yellow-500 ">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );

    case 5:
      return (
        <div className="flex gap-2 text-[25px]  text-yellow-500 ">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
    default:
      return null;
  }
};

const ProductCard: React.FC<PropsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  return (
    <div className="text-gray-600 text-center text-xl ">
      <div className="font-bold text-2xl mb-3">{title}</div>

      <div className="px-4 border border-gray-400 rounded-lg max-w-[800px]  ">
      {/* */}
        <div>
          <Image
            className="w-[500px] h-[300px] hover:blur-sm rounded-lg mt-2"
            src={img}
            width={200}
            height={300}
            alt={title}
          />
          <button className="font-semibold text-lg bg-red-600 rounded-md mt-4 mb-4 px-4 text-white hover:text-black hover:bg-white">
            Shop Now{" "}
          </button>
        </div>
        <div className="py-4 space-y-2 px-12">
          <p className="text-gray-500 text-sm font-mono">{desc}</p>
         <div className="">{generateRating(rating)}</div>
         <div className="font-semibold flex gap-4 ">
          ${price}
          <del className="text-gray-00 font-sm">${parseInt(price) + 7}.00</del>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
