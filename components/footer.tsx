import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-auto text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              LifestyleForEnvironment
            </h2>
            <p className="text-sm">
              © {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="/"
              className="hover:text-gray-100 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-100 transition-colors duration-300"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
