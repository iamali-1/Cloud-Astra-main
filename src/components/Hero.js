import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative table w-full py-40 bg-[url('')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/60"></div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
