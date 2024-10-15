import React from "react";
import Image from "next/image";

const Testimonail = () => {
  return (
    <div id="Testimonail" className="pt-16 pb-16 dark:bg-gray-700 w-full">
      <h2 className="font-serif text-3xl pb-8 text-gray-400 text-center dark:text-gray-300 w-full">
        Testimonials
      </h2>
      <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-8 mt-5 px-4">
        {/* Testimonial Card Design 1 */}
        <div className="w-full  sm:w-1/3 h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
          <h3 className="text-lg font-serif font-bold text-black dark:text-white mb-4">
            A wonderful experience
          </h3>
          <p className="text-gray-600 text-xl dark:text-gray-300 mb-6">
            &quot;I recently bought a winter coat from TrendyCoats and it's amazing! The material is so warm and cozy. I've received numerous compliments on it. I will definitely be coming back for more.&quot;
          </p>
          <figcaption className="flex items-center">
            <Image
              width={50}
              height={50}
              className="rounded-full hover:scale-110 transition-transform"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt="profile picture"
            />
            <div className="ml-6">
              <div className="text-gray-900 dark:text-gray-300">Michael Gough</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Graphic Designer</div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial Card Design 2 */}
        <div className="w-full sm:w-1/3 h-full p-6  bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 ">
          <div className="flex items-center mb-4">
            <Image
              width={50}
              height={50}
              className="rounded-full hover:scale-110 transition-transform"
              src="data:image/jpeg;base64,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"
              alt="profile picture"
            />
            <div className="ml-6">
              <div className="text-gray-900 dark:text-gray-300">Maya Ali</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Actor</div>
            </div>
          </div>
          <h3 className="text-lg font-serif font-bold text-black dark:text-white mb-4">
            Highly recommend!
          </h3>
          <p className="text-gray-600 text-xl dark:text-gray-300">
            &quot;I found the perfect pair of jeans at DenimDen. The fit is just right and they are so comfortable. I've been wearing them non-stop. The customer service was also top-notch!&quot;
          </p>
        </div>

        {/* Testimonial Card Design 3 */}
        <div className="w-full sm:w-1/3 h-full p-6 bg-gray-100 dark:bg-gray-800   text-white rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
          <div className="flex items-center mb-4">
            <Image
              width={50}
              height={50}
              className="rounded-full hover:scale-110 transition-transform"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="ml-6 ">
              <div className="text-gray-900 dark:text-gray-300">Jese Leos</div>
              <div className="text-sm text-gray-900 dark:text-gray-300">Entrepreneur</div>
            </div>
          </div>
          <p className="text-xl  mb-4 text-black dark:text-white">
            &quot;I am extremely pleased with the sneakers I bought from SneakerHub. They are stylish and comfortable, perfect for everyday wear. The shipping was fast and the packaging was great!&quot;
          </p>
          <h3 className="text-lg font-serif font-bold text-black dark:text-white">
            Stylish and comfortable
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;


//My design

// import React from "react";
// import Image from "next/image";
// import article from "../../public/article.png";

// const Testimonail = () => {
//   return (
//     <>
//       <div id="Testimonail" className="pt-16 pb-16 grid-cols-2 dark:bg-dark w-full">
//         <div className="font-serif text-3xl pb-4 text-gray-400 text-center dark:text-gray-300 w-full">
//           Testimonials
//           <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-4 mt-0 sm:mt-5">
//             <div className="w-full sm:w-1/3 h-full space-y-10 border border-b-3 border-t-8 rounded-2xl border-gray-600 items-center flex flex-col dark:bg-gray-800">
//               <h3 className="text-lg font-serif font-bold text-black dark:text-white mt-4 px-6">
//                 Fashion about something that comes from within you
//               </h3>
//               <p className="my-4 text-gray-600 text-xl px-12 py-6 dark:text-gray-300">
//                 &quot;I recently purchased a summer dress from FashionFolio and I am happier! The quality is fantastic, and the fit is perfect. I&apos;ve received many compliments every time I wear it. I&apos;ll definitely be shopping here again!&quot;
//               </p>
//               <figcaption className="flex items-center justify-center">
//                 <Image
//                   width={50}
//                   height={36}
//                   className="rounded-full w-[20] h-[20] hover:scale-125"
//                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
//                   alt="profile picture"
//                 />
//                 <div className="space-y-0.5 font-sm dark:text-white text-left rtl:text-right ms-3 mt-5 mb-4">
//                   <div className="text-gray-900 dark:text-gray-300">Bonnie Green</div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
//                     An Artist
//                   </div>
//                 </div>
//               </figcaption>
//             </div>
//             <div className="w-full sm:w-4/6 h-full border border-b-8 rounded-xl border-gray-600 items-center flex flex-col dark:bg-gray-800">
//               <div className="dark:text-white">
//                 <h5 className="font-normal text-black dark:text-white text-[20px] m-0">
//                   Bonnie Green
//                 </h5>
//                 <h6 className="font-thin text-black dark:text-gray-400 text-[15px] m-0">
//                   (An Artist)
//                 </h6>
//               </div>
//               <p className="text-gray-800 dark:text-gray-300 font-mono text-[20px]">
//                 Recently purchased this article from FashionFolio
//               </p>
//               <Image src={article} className="w-2/3" alt="Sale Image" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonail;
