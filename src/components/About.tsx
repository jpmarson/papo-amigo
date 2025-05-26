import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="como-funciona">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.pexels.com/photos/3772514/pexels-photo-3772514.jpeg" 
              alt="Pessoa enviando mensagem no WhatsApp" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Um Amigo Sempre Disponível
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O Papo Amigo nasceu para oferecer companhia e boas conversas a qualquer hora. 
              Seja para trocar ideias sobre o dia a dia, relembrar histórias ou apenas ter 
              alguém com quem contar, estamos sempre aqui.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sem julgamentos, sem pressa. Apenas boa conversa e um ouvido atento 
              para quando você precisar desabafar ou simplesmente bater um papo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;