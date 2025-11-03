interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  features: string[];
}

export default function ProductCard({ name, image, price, features }: ProductCardProps) {
  return (
    <div className="rounded-xl p-6 text-center hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />

      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-[#B68B3E] font-bold text-lg mt-2">{price}</p>

      <ul className="mt-4 text-gray-600 text-sm space-y-1">
        {features.map((feat, index) => (
          <li key={index}>• {feat}</li>
        ))}
      </ul>

      <button className="mt-5 w-full bg-[#25D3664D] text-[#0D0D0D] py-2 rounded-md hover:bg-yellow-700 transition">
        WhatsApp to Order
      </button>
    </div>
  );
}
