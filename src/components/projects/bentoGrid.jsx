"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const bento = {
  lg: {
    item: "sm:col-span-2 sm:row-span-2",
    location: "text-sm lg:text-md xl:text-lg",
    name: "text-md sm:text-xl lg:text-2xl xl:text-3xl",
  },
  md: {
    item: "sm:col-span-2 sm:row-span-1",
    location: "text-sm lg:text-md xl:text-lg",
    name: "text-md sm:text-lg lg:text-xl xl:text-2xl",
  },
  sm: {
    item: "col-span-1 row-span-1",
    location: "text-sm sm:text-[0.65rem] lg:text-[.9rem] xl:text-base",
    name: "text-md sm:text-sm lg:text-lg xl:text-xl",
  },
};

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default function BentoGrid({ items }) {
  const [width, setWidth] = useState();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= breakpoints.sm) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="w-full h-[32rem] grid grid-cols-1 grid-rows-3 gap-3 text-white sm:grid-cols-4 sm:grid-rows-3 lg:h-[40rem] xl:h-[64rem]">
      {(isMobile ? items.slice(0, 3) : items).map((item, index) => (
        <div
          key={index}
          className={`w-full h-full relative flex flex-col justify-end items-start overflow-hidden rounded-xl group ${item.className.item}`}
        >
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={1024}
            height={1024}
            className="absolute object-cover w-full h-full brightness-75 object-top transition duration-300 group-hover:scale-105 group-hover:brightness-50"
          />
          <Link
            href={item.href}
            className="relative w-min px-4 py-6 flex flex-col justify-end text-white"
          >
            <div className="flex flex-col justify-end">
              <p className={`${item.className.location} text-nowrap`}>
                {item.location}
              </p>
              <p className={`${item.className.name} text-nowrap`}>
                {item.name}
              </p>
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.05rem] bg-white"></span>
          </Link>
        </div>
      ))}
    </div>
  );
}
