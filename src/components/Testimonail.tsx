import React from "react";
import Image from "next/image";
import article from "../../public/article.png";

const Testimonail = () => {
  return (
    <>
      <div id="Testimonail" className="container pt-16 pb-16 grid-cols-2">
        <div className="font-serif text-3xl pb-4 text-gray-400 text-center">
          Testimonails
          <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-4 mt-5">
            <div className="w-full sm:w-1/3 h-full space-x-3 space-y-10 border border-b-3 border-t-8 rounded-2xl border-gray-600 items-center flex flex-col">
              <h3 className="text-lg font-serif font-bold text-black dark:text-white mt-4 px-6">
                Fashion about something that comes from within you
              </h3>
              <p className="my-4 text-gray-600 text-xl px-12 py-6">
                &quot;I recently purchased a summer dress from FashionFolio and I am happier! The quality is fantastic, and the fit is perfect. I&apos;ve received many compliments every time I wear it. I&apos;ll definitely be shopping here again!&quot;
              </p>
              <figcaption className="flex items-center justify-center">
                <Image
                  width={50}
                  height={36}
                  className="rounded-full w-[20] h-[20] hover:scale-125"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-sm dark:text-white text-left rtl:text-right ms-3 mt-5 mb-4">
                  <div className="text-gray-900">Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    An Artist
                  </div>
                </div>
              </figcaption>
            </div>
            <div className="w-full sm:w-4/6 h-full border border-b-8 rounded-xl border-gray-600 items-center flex flex-col">
              <div>
                <h5 className="font-normal text-black text-[20px] m-0">
                  Bonnie Green
                </h5>
                <h6 className="font-thin text-black text-[15px] m-0">
                  (An Artist)
                </h6>
              </div>

              <p className="text-gray-800 font-mono text-[20px]">
                Recently purchased this article from FashionFolio
              </p>
              <Image src={article} className="w-2/3" alt="Sale Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonail;
