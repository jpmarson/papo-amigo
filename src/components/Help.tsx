import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Help: React.FC = () => {
  const [iframeError, setIframeError] = useState(false);
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSclLcmzK4tH0gK2gV4Vm_IsjW50klOmH9lw4K7NL_aZX91oSg/viewform";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ajuda</h1>
        <div className="flex flex-col items-center">
          {!iframeError ? (
            <iframe 
              src={`${formUrl}?embedded=true`}
              width="640" 
              height="721" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="shadow-lg rounded-lg"
              onError={() => setIframeError(true)}
            >
              Loading…
            </iframe>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Para acessar o formulário de ajuda, por favor clique no botão abaixo:
              </p>
              <a 
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
              >
                <ExternalLink size={20} className="mr-2" />
                Abrir Formulário
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;