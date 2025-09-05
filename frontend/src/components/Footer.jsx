const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white border-t-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#carros"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Carros
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#lojas"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">DevCars</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Há mais de 20 anos oferecendo os melhores carros com qualidade,
              confiança e atendimento excepcional para nossos clientes.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(11) 9999-8888</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contato@devcars.com.br</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-1 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DevCars. Todos os direitos reservados. |
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200 ml-1"
            >
              Política de Privacidade
            </a>{" "}
            |
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200 ml-1"
            >
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
