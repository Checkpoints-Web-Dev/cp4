import { useState } from "react";

const Lojas = () => {
  const [lojas, setLojas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const fetchLojas = async () => {
    try {
      setErro(null);
      setLoading(true);
      const response = await fetch("http://localhost:5001/lojas");
      const data = await response.json();
      setLojas(data);
    } catch (error) {
      console.error("Erro ao buscar lojas: ", error);
      setErro("Erro ao buscar lojas. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Lojas
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre a loja DevCars mais próxima de você. Estamos presentes em
            diversos pontos da cidade para melhor atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading ? (
            <p className="text-xl text-blue-600">Buscando lojas...</p>
          ) : !erro ? (
            lojas.map((loja) => (
              <div
                key={loja.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 p-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {loja.nome}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {loja.especialidades.map((especialidade, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md font-medium"
                      >
                        {especialidade}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-medium">
                        {loja.endereco}
                      </p>
                      <p className="text-gray-600 text-sm">{loja.cidade}</p>
                      <p className="text-gray-600 text-sm">CEP: {loja.cep}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors">
                      {loja.telefone}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm">
                      {loja.email}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-900 text-sm font-medium">
                      Gerente: {loja.gerente}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Horários de Funcionamento
                  </h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Seg - Sex:</span>
                      <span>{loja.horarios.segunda}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>{loja.horarios.sabado}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>{loja.horarios.domingo}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                    Ver no Mapa
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-gray-300">
                    Ligar Agora
                  </button>
                </div>
              </div>
            ))
          ) : (
            erro && <p className="text-xl text-red-600">{erro}</p>
          )}
        </div>
      </div>

      <div className="text-center mt-8 md:mt-12">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium text-lg transition-colors"
          onClick={fetchLojas}
        >
          Buscar Lojas
        </button>
      </div>
    </section>
  );
};

export default Lojas;
