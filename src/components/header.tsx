import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import myInfo from "@/data/my-info.json";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", to: "/", hash: undefined },
    { name: "About", to: "/about", hash: undefined },
    { name: "Projects", to: "/projects", hash: undefined },
    { name: "Products", to: "/products", hash: undefined },
    { name: "Contact", to: "/", hash: "contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt={`${myInfo.domain}`}
              className="rounded-lg w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">{`${myInfo.domain}`}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                hash={item.hash}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a href={`mailto:${myInfo.email}?subject=I want to hire you!`}>
              <Button className="bg-pink-600 hover:bg-pink-700">Hire Me</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  hash={item.hash}
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href={`mailto:${myInfo.email}?subject=I want to hire you!`}>
                <Button className="bg-pink-600 hover:bg-pink-700 w-fit">
                  Hire Me
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
