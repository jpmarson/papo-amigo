import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Política de Privacidade - Papo Amigo</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Dados Coletados</h2>
            <p className="text-gray-600 mb-4">
              O único dado pessoal coletado é o número de telefone. Não são armazenados nome, endereço, 
              e-mail ou qualquer outro dado pessoal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Armazenamento de Conversas</h2>
            <p className="text-gray-600 mb-4">
              As conversas são gravadas para fins de análise de qualidade, identificação de problemas e 
              aprimoramento do serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Segurança dos Dados</h2>
            <p className="text-gray-600 mb-4">
              Os dados coletados são armazenados de maneira segura e utilizados exclusivamente para 
              melhorar o serviço prestado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Exclusão de Dados</h2>
            <p className="text-gray-600 mb-4">
              O usuário pode solicitar a exclusão dos dados armazenados enviando um e-mail para 
              jpmarson@gmail.com. O pedido será processado em até 48 horas úteis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cumprimento da LGPD</h2>
            <p className="text-gray-600 mb-4">
              O serviço Papo Amigo respeita a Lei Geral de Proteção de Dados (LGPD). Todos os dados 
              pessoais são tratados de forma transparente e segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Alterações na Política</h2>
            <p className="text-gray-600 mb-4">
              O Papo Amigo reserva-se o direito de atualizar estes Termos de Uso e Política de Privacidade 
              a qualquer momento. As alterações serão comunicadas aos usuários com antecedência.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;