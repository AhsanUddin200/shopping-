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
    url: 'https://www.trueclassictees.com/cdn/shop/files/everyday.jpg?v=1716520191&width=480',
    price: 12,
    piecesLeft: 10,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/work_commute.jpg?v=1716520191&width=480',
    price: 13,
    piecesLeft: 8,
    piecesSold: 7,
    category: 'modern',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4236_PEACH_2_34466a86-0c72-4e7c-beef-70f9256c8945.jpg?v=1710958557&width=500',
    price: 14,
    piecesLeft: 5,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4238_NAVY_2_4e688eda-9f3b-4633-9663-b062b6f899cc.jpg?v=1719244027&width=500',
    price: 15,
    piecesLeft: 12,
    piecesSold: 4,
    category: 'traditional',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4222_BLACKW_2_69384fa5-2d46-4668-92b4-a53634946c8f.jpg?v=1720555399&width=500',
    price: 16,
    piecesLeft: 7,
    piecesSold: 3,
    category: 'modern',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4013_BLACK_2.jpg?v=1688067259&width=480',
    price: 17,
    piecesLeft: 9,
    piecesSold: 1,
    category: 'traditional',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/work_nightout.jpg?v=1716520191&width=480',
    price: 12,
    piecesLeft: 4,
    piecesSold: 6,
    category: 'modern',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/occasion.jpg?v=1716520191&width=480',
    price: 13,
    piecesLeft: 3,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4219_CARBON_2_f9c1df4a-6497-4a7c-95b1-c909896c6060.jpg?v=1695661560&width=500',
    price: 14,
    piecesLeft: 1,
    piecesSold: 0,
    category: 'modern',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4005_NAVY_4_a36ca46c-3cb1-480e-b298-383ca774a048.jpg?v=1724202281&width=500',
    price: 15,
    piecesLeft: 15,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/11-11-22Tommyecom_7023_LOOK_1_50791fd1-64f2-49ad-b670-db6a84ebb298.jpg?v=1704908650&width=500',
    price: 16,
    piecesLeft: 11,
    piecesSold: 8,
    category: 'modern',
  },
  {
    url: 'https://www.trueclassictees.com/cdn/shop/files/4236_WHITE_2.jpg?v=1690565344&width=480',
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
