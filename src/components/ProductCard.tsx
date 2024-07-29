import React from 'react';
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<PropsType> = ({ img, title, desc, rating, price }) => {
  return (
    <div className='px-4 border border-gray-400 rounded-lg max-w-[800px]'>
      <Image className="w-[500px] h-[300px] " src={img} width={200} height={300} alt={title} />
      
    </div>
  );
}

export default ProductCard;
