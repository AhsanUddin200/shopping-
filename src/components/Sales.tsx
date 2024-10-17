"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Sales() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 9000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div   id="SalesOffer" className="text-center mb-12 ">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Exclusive Sales
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Best deals for Men, Women, and Kids
        </p>
      </div>
      <div className="container mx-auto px-4">
        {visible && (
          <div className="bg-red-600 text-white text-center py-4 rounded-md mb-8">
            <p className="text-3xl font-bold">Flat 50% off</p>
          </div>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Sale Item 1 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1631005438015-a2d58390d01e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$126</del>
                <p className="text-2xl font-bold text-white">$63</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 2 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/7139722/pexels-photo-7139722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$55</del>
                <p className="text-2xl font-bold text-white">$27.5</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 3 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/18571715/pexels-photo-18571715/free-photo-of-child-model-posing-in-bow-tie-and-suspenders.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$67</del>
                <p className="text-2xl font-bold text-white">$33.5</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 4 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/19664801/pexels-photo-19664801/free-photo-of-little-boy-in-vest-and-white-shirt-standing-on-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$100</del>
                <p className="text-2xl font-bold text-white">$50</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 5 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/20777176/pexels-photo-20777176/free-photo-of-model-in-a-red-traditional-dress-and-an-embroidered-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$96</del>
                <p className="text-2xl font-bold text-white">$48</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 6 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sale offer"
              layout="responsive"
              width={500}h
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$81</del>
                <p className="text-2xl font-bold text-white">$40.5</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 7 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1585518126763-5146ad8837a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk4fHx8ZW58MHx8fHx8"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$130</del>
                <p className="text-2xl font-bold text-white">$65</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          {/* Sale Item 8 */}
          <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgyfHx8ZW58MHx8fHx8"
              alt="sale offer"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center mb-4">
                <del className="text-gray-400 dark:text-gray-500">$150</del>
                <p className="text-2xl font-bold text-white">$75</p>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
