import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Termos de Uso - Papo Amigo</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-4">
              Ao utilizar o serviço Papo Amigo, você concorda com os presentes Termos de Uso e Política de Privacidade. 
              Caso não concorde, por favor, não utilize o serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-600 mb-4">
              O Papo Amigo é um serviço de apoio emocional que oferece um espaço de escuta amigável e acolhedora. 
              Não se trata de um serviço terapêutico, psicológico, psicoterapêutico, psicanalítico ou psiquiátrico. 
              O serviço busca reduzir o sentimento de solidão através de diálogos com os perfis Antônio e Luiza, 
              baseados em modelos de linguagem grandes (LLMs).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Uso do Serviço</h2>
            <p className="text-gray-600 mb-4">
              O serviço está disponível 24 horas por dia, 7 dias por semana, podendo haver interrupções para manutenção. 
              A utilização é limitada a uma cota gratuita diária de 20 mensagens. Ao exceder essa cota, será cobrado o 
              valor de R$ 9,90 para conversas ilimitadas durante 30 dias. A cobrança se repetirá mensalmente até o 
              cancelamento por parte do usuário. Não há contrato anual ou mensal, apenas renovação automática a cada 30 dias.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Reembolso</h2>
            <p className="text-gray-600 mb-4">
              O usuário tem até 7 dias após o pagamento para solicitar o reembolso, que será realizado de forma integral. 
              O pedido deve ser encaminhado para o e-mail: jpmarson@gmail.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cancelamento</h2>
            <p className="text-gray-600 mb-4">
              Para cancelar a renovação do serviço, basta não efetuar o pagamento após o término do período de 30 dias. 
              O acesso ilimitado será encerrado ao término do período pago.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 mb-4">
              O Papo Amigo não substitui serviços de saúde mental e não se responsabiliza por decisões tomadas com base 
              nas interações realizadas. Em caso de necessidade de suporte psicológico, procure um profissional de saúde 
              qualificado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Suporte</h2>
            <p className="text-gray-600 mb-4">
              Não há suporte disponível para o serviço.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;