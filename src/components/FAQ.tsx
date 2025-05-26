import React from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                O Antônio é psicólogo?
              </h3>
              <p className="text-gray-600">
                Não. Ele é um amigo virtual que escuta com empatia e sem julgamentos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Preciso pagar algo?
              </h3>
              <p className="text-gray-600">
                Você tem 30 mensagens grátis por dia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Preciso me cadastrar?
              </h3>
              <p className="text-gray-600">
                Não, basta clicar e já começar a conversar.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Para mais dúvidas, consulte nossos{' '}
            <Link to="/termos-de-uso" className="text-blue-500 hover:text-blue-600">
              Termos de Uso
            </Link>{' '}
            e{' '}
            <Link to="/politica-de-privacidade" className="text-blue-500 hover:text-blue-600">
              Política de Privacidade
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;