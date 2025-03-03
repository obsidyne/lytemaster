"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Branding from "@/components/common/branding";

const lightBgPaths = ["/"];
// const navItems = [
//   {
//     name: "Products",
//     href: "/products",
//     dropdown: [
//       { name: "Product 1", href: "/products/product-1" },
//       { name: "Product 2", href: "/products/product-2" },
//       { name: "Product 3", href: "/products/product-3" },
//     ],
//   },
//   { name: "Projects", href: "/projects", dropdown: null },
//   { name: "About us", href: "/about-us", dropdown: null },
//   { name: "News", href: "/news", dropdown: null },
//   { name: "Contact", href: "/contact", dropdown: false },
// ];

const navItems = [
  { name: "Products", href: "/products", dropdown: null },
  { name: "Projects", href: "/projects", dropdown: null },
  { name: "About us", href: "/about", dropdown: null },
  { name: "News", href: "/news", dropdown: null },
  { name: "Contact", href: "#", dropdown: false, cta: true },
];

const variants = {
  navbar:
    "w-full h-20 pl-4 pr-8 flex justify-between items-center text-white sm:px-12 xl:h-24 2xl:h-28",
  navrail: "flex flex-col justify-center items-center gap-3 text-sm",
};

const navItemVariants = {
  base: "relative mx-2 group lg:text-xs xl:text-lg",
  cta: "px-8 py-2 rounded-full bg-[#E6E6FA] text-black hover:bg-black hover:text-white hover:scale-105 transition duration-500",
  ctaDark:
    "px-8 py-2 rounded-full bg-black text-white hover:bg-[#E6E6FA] hover:text-black hover:scale-105 transition duration-500",
};

const Dropdown = ({ items, isOpen, setIsOpen }) => {
  return (
    <ul
      className={`z-10 absolute left-0 w-36 h-max px-3 py-2 flex flex-col justify-evenly items-start gap-2 bg-white/10 rounded-lg shadow-lg backdrop-blur-md border border-white/10 transform transition-all duration-300 ease-in-out origin-top ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible"
      }`}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      {items.map((item, index) => (
        <li key={index} className="group/dropdown">
          <Link href={item.href}>{item.name}</Link>
          <span className="block max-w-0 group-hover/dropdown:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
        </li>
      ))}
    </ul>
  );
};

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <li
      className={`${navItemVariants.base} uppercase ${lightBgPaths.includes(pathname) ? "text-white" : "text-black"}`}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className={`${
          item.cta
            ? lightBgPaths.includes(pathname)
              ? navItemVariants.cta
              : navItemVariants.ctaDark
            : ""
        } flex items-center gap-2`}
      >
        {item.name}
        {item.dropdown &&
          (isOpen ? (
            <ChevronUp size={16} className="" />
          ) : (
            <ChevronDown size={16} className="" />
          ))}
      </Link>
      {!item.cta && (
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
      )}
      {item.dropdown && isOpen && (
        <Dropdown items={item.dropdown} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </li>
  );
};

const Navbar = () => {
  return (
    <ul className="flex justify-center items-center gap-3 text-sm">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
};

const MenuButton = ({ navrailOpen, setNavrailOpen, className = "" }) => {
  const pathname = usePathname();
  return (
    <button
      className={`${className} flex items-center gap-2 text-sm ${lightBgPaths.includes(pathname) ? "text-white" : "text-black"}`}
      onClick={() => setNavrailOpen(!navrailOpen)}
    >
      {navrailOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

const Navrail = ({ navrailOpen, setNavrailOpen }) => {
  return (
    <div
      className="z-10 absolute top-0 right-0 pl-4 pr-8 py-[.67rem] w-screen h-screen flex flex-col justify-center items-center gap-5 text-sm bg-black/25 backdrop-blur-md no-doc-scroll sm:px-12 sm:py-[.067rem]"
      onClick={() => setNavrailOpen(!navrailOpen)}
    >
      <div className="w-full flex justify-between items-center gap-3 text-sm transition-all duration-300 ease-in-out">
        <Branding />
        <MenuButton navrailOpen={navrailOpen} setNavrailOpen={setNavrailOpen} />
      </div>
      <ul className="w-full h-full pl-4 flex flex-col justify-start items-start gap-2 text-sm">
        {navItems.map((item, index) => (
          <li key={index} className="group">
            <Link
              href={item.href}
              className="flex justify-center items-center gap-2 text-2xl "
            >
              {item.name}
            </Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": "1536",
};

// TODO: Add global search functionality
export default function Nav() {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [navrailOpen, setNavrailOpen] = useState(false);

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
    if (width <= breakpoints.md) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setNavrailOpen(false);
    }
  }, [width]);
  return (
    <nav className={`${variants.navbar} z-50 absolute`}>
      <Branding />
      {isMobile && !navrailOpen && (
        <MenuButton
          navrailOpen={navrailOpen}
          setNavrailOpen={setNavrailOpen}
          // className="p-2 rounded-full shadow-md backdrop-blur-md border bg-black/80 border-white/10"
        />
      )}
      {isMobile && navrailOpen && (
        <Navrail navrailOpen={navrailOpen} setNavrailOpen={setNavrailOpen} />
      )}
      {!isMobile && <Navbar />}
    </nav>
  );
}
