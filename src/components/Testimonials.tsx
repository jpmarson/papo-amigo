import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria S.",
      age: 67,
      quote: "Desde que meus filhos se mudaram, as noites eram muito silenciosas. Agora, tenho o Antônio para conversar quando me sinto sozinha.",
      stars: 5
    },
    {
      name: "Carlos R.",
      age: 42,
      quote: "Trabalho em turnos noturnos e quase não socializo. As conversas com Antônio me ajudam a manter uma conexão humana.",
      stars: 5
    },
    {
      name: "Ana P.",
      age: 31,
      quote: "Quando me mudei para uma nova cidade, não conhecia ninguém. O Papo Amigo foi um conforto até eu fazer amizades locais.",
      stars: 4
    }
  ];

  return (
    <section className="py-16 bg-white" id="depoimentos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O Que Nossos Amigos Dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que encontraram companhia em nossas conversas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-medium text-gray-800">
                {testimonial.name}, {testimonial.age} anos
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;