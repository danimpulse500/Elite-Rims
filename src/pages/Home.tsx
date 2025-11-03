import Rim from "../assets/images/RIM.png";
import ProductCard from "../components/ProductCard";
import RootLayout from "../layout"
import {Link} from "react-router-dom"
import { products } from "../data/products";

export default function Home() {
  return (
    <RootLayout>
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="container mx-auto px-20 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Elite Rims for the <br /> Driven.
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-lg">
              Stand out from the crowd. Every turn deserves a touch of gold.
            </p>

            <button className="mt-6 inline-block bg-[#C0C0C033] text-[#B68B3E] font-semibold px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Contact Us
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={Rim} alt="Luxury Car" className="w-full max-w-md" />
          </div>
        </div>
      </section>

{/* PRODUCT LISTING SECTION */}
<section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Products</h2>
    <Link to="/services" className="text-gray-700 hover:text-black text-sm sm:text-base">
      See All
    </Link>
  </div>

  <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.slice(0, 8).map((product, index) => (
      <ProductCard
        key={index}
        name={product.name}
        image={product.image}
        price={product.price}
        features={product.features}
      />
    ))}
  </div>
</section>


    </RootLayout>
  );
}
