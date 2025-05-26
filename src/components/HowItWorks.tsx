import React from 'react';
import { MessageSquare, User, Clock } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <User className="w-10 h-10 text-blue-500" />,
      title: "Escolha seu amigo",
      description: "Selecione entre Antônio ou Luiza, conforme sua preferência para a conversa."
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
      title: "Inicie uma conversa",
      description: "Clique no botão e comece a conversar pelo WhatsApp, sem complicações."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "A qualquer momento",
      description: "Conte com um amigo a qualquer hora do dia ou da noite, estamos sempre disponíveis."
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nosso serviço é simples e direto, para que você possa ter companhia quando precisar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-8px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">
            "Sem julgamentos, sem pressa. Apenas boa conversa."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;