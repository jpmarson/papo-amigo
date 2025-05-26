import React from 'react';
import { MessageCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const suggestions = [
    {
      title: "Pergunte sobre o bairro onde mora",
      description: "Descubra lugares interessantes e histórias locais"
    },
    {
      title: "Peça uma recomendação cultural",
      description: "Livros, filmes, séries ou música para seu momento"
    },
    {
      title: "Converse sobre um tópico específico",
      description: "Tecnologia, esportes, culinária ou outros assuntos"
    },
    {
      title: "Pergunte sobre suas preferências de lazer",
      description: "Hobbies, atividades favoritas e passatempos"
    },
    {
      title: "Peça ajuda com outros idiomas",
      description: "Tire dúvidas e pratique inglês ou espanhol"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="fale-conosco">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pronto para uma Boa Conversa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Escolha quem você gostaria de conversar agora e clique no botão abaixo.
            Estamos ansiosos para te ouvir.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Antônio" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Antônio</h3>
                <p className="text-gray-600 mb-4">
                  Gosta de conversar sobre esportes, tecnologia, filmes e histórias de vida.
                </p>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-lg shadow-md hover:bg-[#128C7E] transition-colors duration-300 w-full"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Falar com Antônio
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="text-center relative">
                <span className="absolute -top-2 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  Em breve
                </span>
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Luiza" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover opacity-70"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Luiza</h3>
                <p className="text-gray-600 mb-4">
                  Adora conversar sobre livros, viagens, culinária e experiências pessoais.
                </p>
                <button 
                  disabled
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-400 text-white font-medium rounded-lg shadow-md cursor-not-allowed w-full opacity-70"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Falar com Luiza
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Sugestões para Iniciar a Conversa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                    <MessageSquare size={16} className="mr-2 text-blue-500" />
                    {suggestion.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {suggestion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;