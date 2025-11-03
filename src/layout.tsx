import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Elite Auto Rims",
  description: "Premium alloy rims for luxury and performance vehicles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
