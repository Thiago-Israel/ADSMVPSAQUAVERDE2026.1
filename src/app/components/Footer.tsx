import { Facebook, Instagram, Twitter, Mail, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Leaf className="h-6 w-6 text-[#2E7D32]" />
              </div>
              <span className="font-['Poppins'] text-xl font-semibold">
                Saquarema Verde
              </span>
            </div>
            <p className="font-['Roboto'] text-sm text-white/90">
              Promovendo o ecoturismo sustentável e a preservação ambiental em Saquarema - RJ.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-['Poppins'] font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-['Roboto'] text-sm">
              <li>
                <a href="/" className="hover:text-[#66BB6A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/trilhas" className="hover:text-[#66BB6A] transition-colors">
                  Trilhas Ecológicas
                </a>
              </li>
              <li>
                <a href="/eventos" className="hover:text-[#66BB6A] transition-colors">
                  Eventos Ambientais
                </a>
              </li>
              <li>
                <a href="/reservas" className="hover:text-[#66BB6A] transition-colors">
                  Reservas Ecológicas
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-['Poppins'] font-semibold mb-4">Conecte-se Conosco</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@saquaremaverde.com.br"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="font-['Roboto'] text-sm text-white/90">
              contato@saquaremaverde.com.br
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="font-['Roboto'] text-sm text-white/80">
            © {new Date().getFullYear()} Saquarema Verde Online. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
