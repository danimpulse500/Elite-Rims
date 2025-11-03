import RootLayout from "../layout";
import aboutImg from "../assets/images/RIM.png"; // Replace with a proper about image later

export default function About() {
  return (
    <RootLayout>
      {/* HERO / ABOUT INTRO SECTION */}
      <section className="bg-white py-20 px-20">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Text */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-[#B68B3E]">Elite Auto Rims</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              At Elite Auto Rims, we believe every vehicle deserves a bold, premium look.
              We provide top-tier alloy rims engineered for performance, durability, and
              style. With a passion for excellence and a commitment to quality,
              we make your ride stand out on every road you take.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
              From gold-plated custom rims to high-performance lightweight alloys,
              our products are crafted for drivers who pursue uniqueness and class.
            </p>

            <button className="mt-6 inline-block bg-[#C0C0C033] text-[#B68B3E] font-semibold px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Contact Us
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img src={aboutImg} alt="About Elite Auto Rims" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-[#F9F9F9] py-20 px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold text-[#B68B3E] mb-3">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Our rims are crafted with top-grade materials to ensure long-lasting durability and luxury appeal.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold text-[#B68B3E] mb-3">Exclusive Designs</h3>
              <p className="text-gray-600 text-sm">
                Stand out with unique, head-turning designs engineered to elevate your vehicle’s presence.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold text-[#B68B3E] mb-3">Customer-Centered Service</h3>
              <p className="text-gray-600 text-sm">
                We ensure a seamless experience — from product selection to installation guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
