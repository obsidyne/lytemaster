import Image from "next/image";
import aboutImage from "@assets/about.png";

const aboutText = `Driven by the increasing demand for energy efficient lighting, since 2007 Lyte Master GmbH - Germany has been in the LED lighting and more recently taking advantage of the rapid developments in LED technology to bring you a world class range of LED Lighting Solutions. 

The Brand is always been developed by knowledge of lighting and the profound understanding of its effects on people. Providing next generation LED Lighting Solutions, which are Energy-Efficient, EcoFriendly, Economical and Style Engineered, Lyte Master has proven its extensive portfolio of indoor and outdoor lighting. The Research and Development team is always curious and dedicated to address the needs of customers for the widest range for applications. 
    
As a Lyte Master customer, you are assured the very best technology combined with the highest level of service. Our dedicated Technical and customer support team offers full support on all our products. We believe that the best LED products should be complemented by the very best service and support. That’s why we strive to offer our customers, large and small, a level of service unequalled in the industry.`;

const Breadcrumbs = () => {
  return (
    <div className="flex items-center text-black xl:text-xl 2xl:text-3xl">
      <a href="/" className="hover:text-gray-500 mr-2">
        Home
      </a>
      <span className="font-bold">/</span>
      <span className="whitespace-pre"> About</span>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="h-max my-16 p-8 flex flex-col justify-center items-start gap-5 sm:my-20 sm:px-16 2xl:my-44 2xl:gap-12">
      <Breadcrumbs />
      <h1 className="text-5xl font-bold 2xl:text-6xl">About Us</h1>
      <div className="flex flex-col justify-between items-start gap-12 sm:gap-16 lg:flex-row 2xl:gap-24">
        <p className="whitespace-pre-wrap shrink-0 w-full lg:text-[0.75rem] lg:w-3/5 xl:text-base 2xl:w-3/4 2xl:text-3xl">
          {aboutText}
        </p>
        <Image
          src={aboutImage}
          alt="About Us"
          width={1000}
          height={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
