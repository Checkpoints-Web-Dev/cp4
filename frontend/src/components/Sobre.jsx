const Sobre = () => {
  const valores = [
    {
      icon: "🎯",
      titulo: "Excelência",
      descricao:
        "Comprometidos em oferecer os melhores veículos e serviços do mercado.",
    },
    {
      icon: "🤝",
      titulo: "Confiança",
      descricao:
        "Construímos relacionamentos duradouros baseados na transparência e honestidade.",
    },
    {
      icon: "⚡",
      titulo: "Inovação",
      descricao:
        "Sempre em busca das mais modernas tecnologias e soluções automotivas.",
    },
    {
      icon: "💎",
      titulo: "Qualidade",
      descricao:
        "Cada veículo passa por rigorosa inspeção para garantir a máxima qualidade.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Sobre Nós
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Há mais de 20 anos no mercado automotivo, oferecendo os melhores
            veículos e serviços com excelência e confiabilidade.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 mb-16 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-6">
                Nossa História
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fundada em 2003, nossa loja nasceu do sonho de oferecer veículos
                de qualidade com atendimento personalizado. Começamos como uma
                pequena concessionária familiar e hoje somos referência na
                região.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao longo dos anos, expandimos nosso portfólio para incluir as
                melhores marcas do mercado, sempre mantendo nosso compromisso
                com a satisfação do cliente e a transparência em todas as
                negociações.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa experiência e dedicação nos permitiram construir uma base
                sólida de clientes satisfeitos, que confiam em nós para suas
                necessidades automotivas.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/loja.png"
                alt="Nossa loja"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-600 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                  {valor.titulo}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
