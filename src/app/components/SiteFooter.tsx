import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold font-['Poppins']">
                Saquarema Verde
              </span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Centralizando informações sobre ecoturismo, sustentabilidade e preservação ambiental em Saquarema - RJ.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-['Poppins'] mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trilhas" className="text-white/80 hover:text-white transition-colors text-sm">
                  Trilhas Ecológicas
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-white/80 hover:text-white transition-colors text-sm">
                  Eventos Ambientais
                </Link>
              </li>
              <li>
                <Link to="/reservas" className="text-white/80 hover:text-white transition-colors text-sm">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-['Poppins'] mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Saquarema - RJ, Brasil</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(22) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contato@saquaremaverde.com.br</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-['Poppins'] mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70 text-xs mt-4">
              Siga-nos para ficar por dentro das novidades sobre ecoturismo em Saquarema.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Saquarema Verde Online. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Projeto dedicado à preservação ambiental e turismo sustentável em Saquarema - RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
