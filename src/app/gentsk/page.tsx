import React from 'react';

const imageUrls = [
  'https://img.freepik.com/free-photo/handsome-man_144627-31629.jpg?t=st=1727874735~exp=1727878335~hmac=0c212ecaef30aca9090279195d37da31ec97295af8e84f47451ba98e88e102be&w=360',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+2',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+3',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+4',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+5',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+6',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+7',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+8',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+9',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+10',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+11',
  'https://via.placeholder.com/150?text=Shalwar+Kameez+12',
];

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Men's Shalwar Kameez Collection</h1>
      <div className="grid grid-cols-4 gap-1">
        {imageUrls.map((url, index) => (
          <div key={index} className="overflow-hidden  shadow-lg">
            <img src={url} alt={`Shalwar Kameez ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
