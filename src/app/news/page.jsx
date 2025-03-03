import Image from "next/image";
import { newsPageData } from "@assets/placeholders";
import { HiOutlineArrowRight } from "react-icons/hi";

const Breadcrumbs = () => {
  return (
    <div className="flex items-center text-black xl:text-xl 2xl:text-3xl">
      <a href="/" className="hover:text-gray-500 mr-2">
        Home
      </a>
      <span className="font-bold">/</span>
      <span className="whitespace-pre"> News</span>
    </div>
  );
};

const NewsCard = ({ thumbnail, title, description, date, href }) => {
  return (
    <a
      href={href}
      className="flex flex-col justify-evenly items-start gap-2 2xl:gap-6"
    >
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={400}
        height={200}
        className="w-full h-36 rounded-xl sm:h-56 2xl:h-96"
      />
      <h2 className="mt-3 text-xl font-bold 2xl:text-4xl">{title}</h2>
      <p className="text-sm text-gray-700 2xl:text-2xl">{description}</p>
      <p className="mt-2 text-sm text-gray-700 2xl:text-2xl">{date}</p>
    </a>
  );
};

const NewsGrid = ({ news }) => {
  return (
    <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
      {news.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

const FeaturedNewsCard = ({ thumbnail, title, description, href }) => {
  return (
    <div className="w-full h-[30rem] my-8 relative flex flex-col justify-end items-start gap-4 sm:h-[34rem] 2xl:h-[54rem]">
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={400}
        height={200}
        className="object-cover absolute w-full h-full rounded-xl"
      />
      <div className="w-full p-4 flex flex-col justify-evenly items-start gap-4 z-10 sm:p-10 lg:w-3/5 2xl:p-16 2xl:gap-8">
        <div className="px-6 text-sm bg-white rounded-full flex items-center justify-center sm:text-base 2xl:px-10 2xl:text-3xl">
          FEATURED
        </div>
        <h2 className="text-2xl text-white font-bold sm:text-3xl lg:text-4xl 2xl:text-7xl">
          {title}{" "}
          <a href={href} className="mx-2 text-white font-bold">
            <HiOutlineArrowRight size={26} className="inline-block" />
          </a>
        </h2>
        <p className="w-10/12 text-sm text-gray-100 sm:text-base 2xl:text-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function NewsPage() {
  return (
    <div className="h-max my-16 p-8 flex flex-col justify-center items-start gap-5 sm:my-20 sm:px-16 2xl:my-44 2xl:gap-12">
      <Breadcrumbs />
      <h1 className="text-5xl font-bold 2xl:text-6xl">News</h1>
      <FeaturedNewsCard {...newsPageData.featured} />
      <NewsGrid news={newsPageData.news} />
    </div>
  );
}
