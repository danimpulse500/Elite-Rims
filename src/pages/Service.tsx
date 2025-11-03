import RootLayout from "../layout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";


export default function Service() {
  return (
    <RootLayout>
      <section className="bg-white py-20 px-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Products & Services
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Explore our premium range of luxury custom rims designed for durability, style,
          and unmatched road presence. Choose from our exclusive collections.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
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
