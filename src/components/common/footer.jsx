import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@public/logo.png";

const address = `
Lyte Master GmbH
Auf Dem Schurweßel,
5A 53347 Alfter-Witterschlick Germany
`;

const socials = [
  {
    alt: "Instagram",
    icon: Instagram,
    link: "#",
  },
  {
    alt: "Facebook",
    icon: Facebook,
    link: "#",
  },
  {
    alt: "Linkedin",
    icon: Linkedin,
    link: "#",
  },
  {
    alt: "Twitter",
    icon: Twitter,
    link: "#",
  },
];

const footerLinks = [
  {
    section: "Products",
    links: [
      { name: "Commercial", link: "#" },
      { name: "Industrial", link: "#" },
      { name: "Landscape", link: "#" },
    ],
  },
  {
    section: "About",
    links: [
      { name: "About us", link: "#" },
      { name: "News", link: "#" },
      { name: "Press", link: "#" },
      { name: "Awards", link: "#" },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "Imprint", link: "/imprint" },
      { name: "Privacy Policy", link: "#" },
      { name: "Terms of Use", link: "#" },
    ],
  },
];

const FooterSection = ({ section, links }) => {
  return (
    <div className="w-max">
      <div className="relative inline-block mb-2">
        <h4 className="text-sm lg:text-base xl:text-lg font-semibold">{section}</h4>
        <span className="absolute bottom-0 left-0 w-2/3 h-1 border-b border-white"></span>
      </div>
      <ul className="flex flex-col gap-1 text-gray-300">
        {links.map(({ name, link }, index) => (
          <li
            key={index}
            className="w-min text-xs group lg:text-sm xl:text-base"
          >
            <Link href={link} className="text-nowrap">
              {name}
            </Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.05rem] bg-white"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Branding = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Uncomment if you want logo and title */}
      {/* <Image src={logo} alt="LyteMaster Logo" width={50} className="w-12 lg:w-16" /> */}
      {/* <h1 className="text-3xl font-dmSerifDisplay lg:text-4xl">LyteMaster</h1> */}
      <h1 className="text-3xl font-dmSerifDisplay lg:text-4xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <Link key={social.alt} href={social.link}>
          <social.icon size={18} />
        </Link>
      ))}
    </div>
  );
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#707070" }} className="w-full bg-black text-white">
      <div className="max-w-[75%] mx-auto px-4 sm:px-8 py-12 flex flex-col-reverse items-center justify-center gap-10 sm:flex-row sm:justify-between sm:items-start">
        
        {/* Left Side: Address & Socials */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          {/* <Branding /> */}
          <div className="flex flex-col gap-4 text-gray-300">
            <p className="text-xs whitespace-pre-wrap lg:text-sm xl:text-base text-center sm:text-left">
              {address}
            </p>
            <Socials />
          </div>
        </div>

        {/* Right Side: Footer Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12">
          {footerLinks.map(({ section, links }, index) => (
            <FooterSection key={index} section={section} links={links} />
          ))}
        </div>

      </div>
    </footer>
  );
}
