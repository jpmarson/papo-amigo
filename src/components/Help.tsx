import React, { useEffect } from 'react';

const Help: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ajuda</h1>
        <div className="flex justify-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSclLcmzK4tH0gK2gV4Vm_IsjW50klOmH9lw4K7NL_aZX91oSg/viewform?embedded=true" 
            width="640" 
            height="721" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="shadow-lg rounded-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Help;