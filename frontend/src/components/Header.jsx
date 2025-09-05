"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-sm border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <span className="ml-3 text-xl font-bold text-white">DevCars</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#carros"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Carros
            </a>
            <a
              href="#sobre"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Sobre
            </a>
            <a
              href="#lojas"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Lojas
            </a>
            <a
              href="#contato"
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Entrar
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Agendar Teste
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 border-t border-blue-800">
              <a
                href="#carros"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Carros
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#lojas"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Lojas
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="px-3 py-2 space-y-2">
                <button className="block w-full text-left text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                  Entrar
                </button>
                <button className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                  Agendar Teste
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
