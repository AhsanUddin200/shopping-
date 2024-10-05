"use client"
import React, { useState } from 'react';

const imageItems = [
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/343835/original/PANT_CHINO-PANT_BPT10629S1050G_2_hover.jpg?1718381218=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 12,
    piecesLeft: 10,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/342194/original/PANT_CHINO-PANT_BPT10629S1052G_2_hover.jpg?1716407733=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 13,
    piecesLeft: 8,
    piecesSold: 7,
    category: 'modern',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/343234/original/DENIM_5-POCKET-JEAN_BDB05261S1113W_40_outfitter.jpg?1716479789=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 14,
    piecesLeft: 5,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/332450/original/DENIM_DENIM-JEAN_BDB11737SG5453_40_outfitter.jpg?1707777787=&auto=format%2Ccompress&q=75&fit=clip&cs=srgb&ixlib=react-8.6.1&w=285&dpr=1', // Replace with valid sequential URL
    price: 15,
    piecesLeft: 12,
    piecesSold: 4,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/342931/original/PANT_CHINO-PANT_BWB00809SGY431_3_category.jpg?1716410254=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 16,
    piecesLeft: 7,
    piecesSold: 3,
    category: 'modern',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/325825/original/PANT_CHINO-PANT_BPT11501NN4651_3_category.jpg?1695213556=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 17,
    piecesLeft: 9,
    piecesSold: 1,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/342201/original/PANT_CHINO-PANT_BPT10629S1091B_2_hover.jpg?1716407759=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 12,
    piecesLeft: 4,
    piecesSold: 6,
    category: 'modern',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/291014/original/PANT_CHINO-PANT_BPT10629S0001B_2_hover.jpg?1668745085=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 13,
    piecesLeft: 3,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/339436/original/DENIM_5-POCKET-JEAN_BDB11423S1220B_40_outfitter.jpg?1712771719=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 14,
    piecesLeft: 1,
    piecesSold: 0,
    category: 'modern',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/343847/original/DENIM_DENIM-JEAN_BDB11264SN3290_40_outfitter.jpg?1718818802=&auto=format%2Ccompress&q=75&fit=clip&cs=srgb&ixlib=react-8.6.1&w=285&dpr=1', // Replace with valid sequential URL
    price: 15,
    piecesLeft: 15,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/345086/original/PANT_CHINO-PANT_BPT11567SB4943_3_category.jpg?1725493853=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
    price: 16,
    piecesLeft: 11,
    piecesSold: 8,
    category: 'modern',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/289162/original/PANT_CASUAL-PANT_BPT11117N1220B_3_category.jpg?1668724227=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50', // Replace with valid sequential URL
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('lowToHigh');

  const filteredItems = imageItems
    .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
    .sort((a, b) => (sortOption === 'lowToHigh' ? a.price - b.price : b.price - a.price));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Men's Shalwar Kameez Collection</h1>

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
              <img src={item.url} alt={`Shalwar Kameez ${index + 1}`} className="w-full h-[300px] object-cover md:h-[400px] lg:h-[600px]" />
              <div className="p-4 text-center">
                <p className="text-lg font-bold">Original: ${item.price.toFixed(2)}</p>
                <p className="text-lg text-red-500">Discounted: ${discountedPrice}</p>
              </div>
              <div className="text-center mb-2">
                <button className="bg-blue-500 text-white text-sm font-bold py-1 px-4 rounded hover:bg-blue-600">
                  Shop
                </button>
              </div>
              <div className="text-center text-xs text-gray-600">
                <p>Total Pieces Left: {item.piecesLeft}</p>
                <p>Total Sold Pieces: {item.piecesSold}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
