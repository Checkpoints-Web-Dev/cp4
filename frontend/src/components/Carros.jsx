const carrosData = [
  {
    id: 1,
    nome: "Honda Civic",
    preco: "R$ 89.900",
    ano: "2023",
    quilometragem: "15.000 km",
    combustivel: "Flex",
    transmissao: "Automático",
    imagem: "/civic.png",
  },
  {
    id: 2,
    nome: "Toyota Corolla",
    preco: "R$ 95.500",
    ano: "2024",
    quilometragem: "8.500 km",
    combustivel: "Híbrido",
    transmissao: "CVT",
    imagem: "/corolla.png",
  },
  {
    id: 3,
    nome: "Volkswagen Jetta",
    preco: "R$ 78.900",
    ano: "2022",
    quilometragem: "22.000 km",
    combustivel: "Flex",
    transmissao: "Automático",
    imagem: "/jetta.png",
  },
  {
    id: 4,
    nome: "Hyundai HB20",
    preco: "R$ 65.900",
    ano: "2023",
    quilometragem: "12.000 km",
    combustivel: "Flex",
    transmissao: "Manual",
    imagem: "/hb20.png",
  },
  {
    id: 5,
    nome: "Chevrolet Onix",
    preco: "R$ 72.500",
    ano: "2024",
    quilometragem: "5.000 km",
    combustivel: "Flex",
    transmissao: "Automático",
    imagem: "/onix.png",
  },
  {
    id: 6,
    nome: "Ford EcoSport",
    preco: "R$ 85.900",
    ano: "2023",
    quilometragem: "18.000 km",
    combustivel: "Flex",
    transmissao: "Automático",
    imagem: "/ecosport.png",
  },
];

const Carros = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Veículos
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre o carro perfeito para você em nossa seleção de veículos
            seminovos e novos, todos com garantia e procedência verificada.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center overflow-x-auto pb-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-gray-700 font-medium transition-colors whitespace-nowrap">
            Todos os Carros
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-gray-700 font-medium transition-colors whitespace-nowrap">
            Sedans
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-gray-700 font-medium transition-colors whitespace-nowrap">
            Hatchbacks
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-gray-700 font-medium transition-colors whitespace-nowrap">
            SUVs
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-gray-700 font-medium transition-colors whitespace-nowrap">
            Até R$ 70mil
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
          {carrosData.map((carro) => (
            <div
              key={carro.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 overflow-hidden"
            >
              <div className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={
                      carro.imagem ||
                      "/placeholder.svg?height=200&width=400&query=carro moderno"
                    }
                    alt={carro.nome}
                    className="w-full h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium shadow-md">
                    {carro.ano}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {carro.nome}
                  </h3>
                  <span className="text-xl md:text-2xl font-bold text-blue-600">
                    {carro.preco}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Quilometragem:</span>
                    <span className="font-medium text-gray-900">
                      {carro.quilometragem}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Combustível:</span>
                    <span className="font-medium text-gray-900">
                      {carro.combustivel}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Transmissão:</span>
                    <span className="font-medium text-gray-900">
                      {carro.transmissao}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 pt-0">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            Ver Todos os Carros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carros;
