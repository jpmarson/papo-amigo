import React from 'react';
import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-orange-400 mr-2" size={24} />
              <span className="font-bold text-xl text-orange-400">Papo Amigo</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Sua conversa amiga no WhatsApp, a qualquer hora do seu dia ou noite.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link>
                </li>
                <li>
                  <Link to="/ajuda" className="text-gray-400 hover:text-white transition-colors">Ajuda</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
                </li>
                <li>
                  <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-gray-400" />
                  <a href="mailto:contato@papoamigo.com" className="text-gray-400 hover:text-white transition-colors">
                    contato@papoamigo.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Instagram size={16} className="mr-2 text-gray-400" />
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    @papoamigo
                  </a>
                </li>
                <li className="flex items-center">
                  <Facebook size={16} className="mr-2 text-gray-400" />
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    /papoamigo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center sm:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Papo Amigo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;