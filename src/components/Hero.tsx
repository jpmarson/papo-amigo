import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sempre por Perto,<br />a Qualquer Hora
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Sua conversa amiga no <u>WhatsApp</u>, a qualquer hora do seu dia ou noite.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/5511940607876" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-lg shadow-md hover:bg-[#128C7E] transition-colors duration-300"
              >
                <MessageCircle size={20} className="mr-2" />
                Falar com Antônio
              </a>
              <div className="relative">
                <button 
                  disabled
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-400 text-white font-medium rounded-lg shadow-md cursor-not-allowed w-full opacity-70"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Falar com Luiza
                </button>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  Em breve
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/20716657/pexels-photo-20716657.jpeg" 
              alt="Pessoa usando WhatsApp no celular" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;