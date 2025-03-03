"use client"
import Image from 'next/image';
import CommercialImage from '@/assets/landing/commercial-lighting-thumbnail.jpeg'; // Adjust the path
import IndustrialImage from '@/assets/landing/industrial-lighting-thumbnail.jpeg'; // Adjust the path
import LandscapeImage from '@/assets/landing/hero-placeholder.jpeg'; // Adjust the path
import { GiBulb } from "react-icons/gi";

const products = [
  {
    title: "Commercial Lighting",
    description: "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
    image: CommercialImage,
    count: 15,
  },
  {
    title: "Industrial Lighting",
    description: "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
    image: IndustrialImage,
    count: 16,
  },
  {
    title: "Landscape Lighting",
    description: "Lorem ipsum dolor sit amet consectetur. Mi molestie amet sed eget nunc blandit. Convallis dui tincidunt venenatis aenean vitae dictum.",
    image: LandscapeImage,
    count: 14,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col mt-28">
      {/* Breadcrumb */}
      <div className="p-4 text-sm">
        <div className="max-w-6xl mx-auto">HOME / PRODUCTS</div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-12">Our Products</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {products.map((product) => (
            <a href="/products/category" key={product.title}>
            <div 
              key={product.title} 
              className="h-auto rounded-2xl shadow-md overflow-hidden flex flex-col justify-between" 
              style={{ backgroundImage: `url(${product.image.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="py-12 p-6 bg-gradient-to-b from-black via-transparent to-transparent">
                <h3 className="text-3xl text-white font-bold mb-4">{product.title}</h3>
                <p className="text-white mb-4 m-3">{product.description}</p>
              </div>

              {/* Moved this to the bottom */}
              <div className="flex items-center justify-center gap-2 text-lg font-medium text-white bg-blur rounded-full mx-12 p-4 text-center shadow-md shadow-black backdrop-blur-md m-4">
                <GiBulb className="text-white text-2xl" /> 
                {product.count} Products
              </div>
            </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
