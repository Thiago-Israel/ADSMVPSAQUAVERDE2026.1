import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function SiteFooterMain() {
  return (
    <footer className="bg-[#2E7D32] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Leaf className="h-6 w-6 text-[#2E7D32]" />
              </div>
              <span className="text-xl font-bold">Saquarema Verde</span>
            </div>
            <p className="text-sm text-white/90 mb-4">
              Plataforma dedicada ao ecoturismo e sustentabilidade em Saquarema - RJ. 
              Descubra trilhas, eventos ambientais e belezas naturais da região.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/90 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trilhas" className="text-sm text-white/90 hover:text-white transition-colors">
                  Trilhas Ecológicas
                </Link>
              </li>
              <li>
                <Link to="/#eventos" className="text-sm text-white/90 hover:text-white transition-colors">
                  Eventos Ambientais
                </Link>
              </li>
              <li>
                <Link to="/#reservas" className="text-sm text-white/90 hover:text-white transition-colors">
                  Reservas Ecológicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <MapPin className="h-4 w-4" />
                <span>Saquarema - RJ, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Mail className="h-4 w-4" />
                <span>contato@saquaremaverde.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Phone className="h-4 w-4" />
                <span>(22) 3652-0000</span>
              </div>
            </div>
            
            <h3 className="font-bold mb-3">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80">
          <p>© 2026 Saquarema Verde Online. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com 💚 para preservação ambiental</p>
        </div>
      </div>
    </footer>
  );
}
