import React from "react";
import Image from "next/image";
import sale1 from "../../public/sale1.jpeg";
import sale2 from "../../public/sale2.jpg";

export default function Sales() {
  return (
    <>
      <div className="font-serif text-3xl pb-2 text-gray-400 text-center  ">
        Sales Offer
        <div className="text-center text-sm font-serif">
          For Men,Woman,Boys & Girls
        </div>
      </div>

      <div className="flex  sm:px-4  flex-col sm:flex-row sm:mt-24 justify-center items-center mb-12">
        <div className="flex md:flex-row sm:flex-col gap-8">
        <div className="mb-2 mt-24 sm:mt-12 sm:px-16 lg:px-16">
  <Image
    src={sale2}
    alt="sale offer"
    width={500} // Increased width for sm screens
    height={30}
    className="w-full sm:w-auto"
  />
  <p className="mt-1 text-center text-sm">Kurti san se pehli</p>
  <p className="mt-2 text-center">Text </p>
</div>

          <div className="flex flex-col justify-center items-center gap-6 mt-1">
            <div className="flex flex-col sm-flex-row items-center">
              <Image src={sale2} alt="sale offer" width={200} height={100} />
              <p className="mt-1 text-center text-sm">Kurti</p>
              <p className="mt-2 text-center">Text Below Image 1</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={sale2} alt="sale offer" width={200} height={100} />
              <p className="mt-2 text-center">Text Below Image 2</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:px-12 justify-center items-center gap-12 mt-1">
            <div>
              <Image
                className="w-24  sm:w-32 h-28 object-cover"
                src={sale2}
                alt="sale offer"
                width={200}
                height={100}
              />{" "}
              <p className="mt-1 text-center text-sm">Kurti</p>
              <p className="mt-2 text-center">Text Below Image 1</p>
            </div>

            <div>
              <Image
                className="w-24  sm:w-32 h-28 object-cover"
                src={sale2}
                alt="sale offer"
                width={200}
                height={100}
              />{" "}
              <p className="mt-1 text-center text-sm">Kurti</p>
              <p className="mt-2 text-center">Text Below Image 1</p>
            </div>

            <div>
              <Image
                className="w-24  sm:w-32 h-28 object-cover"
                src={sale2}
                alt="sale offer"
                width={100}
                height={100}
              />{" "}
              <p className="mt-1 text-center text-sm">Kurti</p>
              <p className="mt-2 text-center">Text Below Image 1</p>
            </div>
          </div>
        </div>

        <div className="px-12 ">
          <Image src={sale1} alt="sale offer" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
