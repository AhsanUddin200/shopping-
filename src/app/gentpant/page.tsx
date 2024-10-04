"use client"
import React, { useState } from 'react';

const imageItems = [
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/343835/original/PANT_CHINO-PANT_BPT10629S1050G_2_hover.jpg?1718381218=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50',
    price: 1000,
    piecesLeft: 10,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/342194/original/PANT_CHINO-PANT_BPT10629S1052G_2_hover.jpg?1716407733=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50',
    price: 1200,
    piecesLeft: 8,
    piecesSold: 7,
    category: 'modern',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/290399/original/PANT_CHINO-PANT_BPT10629S1051G_2_hover.jpg?1668744567=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50',
    price: 1500,
    piecesLeft: 5,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/344592/original/PANT_CHINO-PANT_BPT10629S1602G_40_outfitter.jpg?1724364516=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50',
    price: 950,
    piecesLeft: 12,
    piecesSold: 4,
    category: 'traditional',
  },
  {
    url: 'https://bonobos-prod-s3.imgix.net/products/290723/original/PANT_CHINO-PANT_BWB00809SBK438_2_hover.jpg?1668744840=&auto=compress%2Cformat&fit=clip&cs=srgb&w=768&fm=pjpg&q=50',
    price: 1100,
    piecesLeft: 7,
    piecesSold: 3,
    category: 'modern',
  },
  {
    url: 'https://images.pexels.com/photos/9299507/pexels-photo-9299507.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 1150,
    piecesLeft: 9,
    piecesSold: 1,
    category: 'traditional',
  },
  {
    url: 'https://images.pexels.com/photos/9063792/pexels-photo-9063792.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 1300,
    piecesLeft: 4,
    piecesSold: 6,
    category: 'modern',
  },
  {
    url: 'https://images.pexels.com/photos/8063192/pexels-photo-8063192.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 1250,
    piecesLeft: 3,
    piecesSold: 2,
    category: 'traditional',
  },
  {
    url: 'https://media.istockphoto.com/id/1149038994/photo/young-indian-man-in-traditional-wear.jpg?s=612x612&w=0&k=20&c=UXuch6ItELqzsICgsPKn_ML2RIdHY1GVN3iNt357_Aw=',
    price: 1400,
    piecesLeft: 1,
    piecesSold: 0,
    category: 'modern',
  },
  {
    url: 'https://images.pexels.com/photos/9794036/pexels-photo-9794036.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 900,
    piecesLeft: 15,
    piecesSold: 5,
    category: 'traditional',
  },
  {
    url: 'https://images.pexels.com/photos/9108863/pexels-photo-9108863.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 850,
    piecesLeft: 11,
    piecesSold: 8,
    category: 'modern',
  },
  {
    url: 'https://images.pexels.com/photos/8217879/pexels-photo-8217879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 1200,
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
