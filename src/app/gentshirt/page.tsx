"use client"
import React, { useState } from 'react';

type ImageItem = {
  url: string;
  price: number;
  piecesLeft: number;
  piecesSold: number;
  category: string;
};

const imageItems: ImageItem[] = [
  {
    url: 'https://mendeez.com/cdn/shop/files/MNDZNAVYFRONT_720X1080_dae27abf-e65b-4eda-b67b-f92bb0d6a512.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1724136968&width=600',
    price: 12,
    piecesLeft: 10,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://mendeez.com/cdn/shop/files/MUSICFORTHESOULFRONTadjusted.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1724138069&width=600',
    price: 13,
    piecesLeft: 8,
    piecesSold: 7,
    category: 'modern',
  },
  {
    url: 'https://mendeez.com/cdn/shop/files/oxford-crew-neckt-shirtsmendeez-pk-0011672-778301_5bf1e893-9ef2-4ecb-968b-9c24b5af2fb2.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904218&width=600',
    price: 14,
    piecesLeft: 5,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://mendeez.com/cdn/shop/files/icy-v-neckt-shirtsmendeez-pk-0011727-500311_139ebc87-2798-402d-9864-dbac840abd20.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904261&width=600',
    price: 15,
    piecesLeft: 12,
    piecesSold: 4,
    category: 'traditional',
  },
  {
    url: 'https://thecambridgeshop.com/cdn/shop/files/SAB07496.jpg?v=1727422820&width=500',
    price: 16,
    piecesLeft: 7,
    piecesSold: 3,
    category: 'modern',
  },
  {
    url: 'https://thecambridgeshop.com/cdn/shop/files/SAB05974.jpg?v=1727421810&width=500',
    price: 17,
    piecesLeft: 9,
    piecesSold: 1,
    category: 'traditional',
  },
  {
    url: 'https://mendeez.com/cdn/shop/files/LIMITEDEDITIONGREENFRONT.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1724136640&width=600',
    price: 12,
    piecesLeft: 4,
    piecesSold: 6,
    category: 'modern',
  },
  {
    url: 'https://mendeez.com/cdn/shop/files/lostmindsfront_720X1080_e14dd088-fdfb-4120-86f3-23fb1ec728db.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1724136754&width=600',
    price: 13,
    piecesLeft: 3,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://mendeez.com/cdn/shop/products/sangria-full-sleeves-henley-tshirtt-shirtsmendeez-pk-0005559-239208.jpg?crop=region&crop_height=1080&crop_left=28&crop_top=0&crop_width=723&v=1723900573&width=600',
    price: 14,
    piecesLeft: 1,
    piecesSold: 0,
    category: 'modern',
  },
  {
    url: 'https://mendeez.com/cdn/shop/files/3_e5cbe8e5-caa9-4761-bcc1-de6753b3c786.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905186&width=600',
    price: 15,
    piecesLeft: 15,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://thecambridgeshop.com/cdn/shop/files/SAB05815.jpg?v=1727421032&width=500',
    price: 16,
    piecesLeft: 11,
    piecesSold: 8,
    category: 'modern',
  },
  {
    url: 'https://thecambridgeshop.com/cdn/shop/files/SAB08387.jpg?v=1727420963&width=500',
    price: 17,
    piecesLeft: 2,
    piecesSold: 1,
    category: 'traditional',
  },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Traditional', value: 'traditional' },
  { label: 'Modern', value: 'modern' },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('lowToHigh');

  const filteredItems = imageItems
    .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
    .sort((a, b) => (sortOption === 'lowToHigh' ? a.price - b.price : b.price - a.price));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Men's Shirt Collection</h1>

      {/* Filtering and Sorting Options */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded mb-2 md:mb-0 md:w-1/2"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded md:w-1/2"
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => {
          const discountedPrice = (item.price * 0.88).toFixed(2); // 12% discount
          return (
            <div key={index} className="relative overflow-hidden bg-white rounded-lg">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded">12% OFF</div>
              <img src={item.url} alt={`Shirt ${index + 1}`} className="w-full h-[300px] object-cover md:h-[400px] lg:h-[600px]" />
              <div className="p-4 text-center">
                <p className="text-lg font-bold">Original: ${item.price.toFixed(2)}</p>
                <p className="text-lg text-red-500">Discounted: ${discountedPrice}</p>
              </div>
              <div className="text-center mb-2">
                <button className="bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded">Buy Now</button>
              </div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold px-1 py-0.5 rounded">
                {item.piecesLeft} left / {item.piecesSold} sold
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
