import { useState } from "react";
import Image from "next/image";
import macbook from "../public/images/portfolio/macbook.png";

export default function PortfolioCard({
  projectImage,
  link,
  sourceCode,
  info,
  technology,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative shadow-md dark:shadow-none dark:hover:shadow-none dark:border-white dark:border-[1px] hover:shadow-2xl transition p-4 rounded-md">
      {show && (
        <>
          <div className="fixed top-0 left-0 right-0 w-full h-full bg-slate-900/70 z-40">
            <div className="absolute left-[4%] lg:left-[20%] md:left-[10%] top-[30%]">
              <button
                className="absolute right-[5%] md:right-[2%] md:-top-20 -top-8 text-white bg-secondary md:h-10 md:w-10 w-6 h-6 text-center rounded-full hover:text-black"
                onClick={() => setShow(false)}
              >
                X
              </button>
              <video controls className="w-[97%]">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </>
      )}

      <div className="mb-8">
        <img
          onClick={() => setShow(true)}
          className="cursor-pointer w-full h-[130px] object-cover object-center relative"
          src={projectImage}
        />
        <button
          onClick={() => setShow(true)}
          className="absolute left-[40%] top-[20%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-2 h-10 w-10 bg-secondary/75 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
      </div>
      <p className="text-xs text-center text-gray-700 -mt-5 dark:text-gray-500">
        {info}
      </p>
      <div className="mt-5 flex justify-center item-center flex-wrap">
        {technology.map((tech, index) => (
          <div className="m-0.5" key={index}>
            <small className="bg-gray-600 py-1 px-2 rounded-lg text-gray-200 text-xs">
              {tech}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
