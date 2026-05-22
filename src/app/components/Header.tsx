import { Link, useLocation } from 'react-router';
import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32]">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="font-['Poppins'] text-xl font-semibold text-[#2E7D32]">
              Saquarema Verde
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/trilhas"
              className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/trilhas') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Trilhas
            </Link>
            <Link
              to="/eventos"
              className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/eventos') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Eventos
            </Link>
            <Link
              to="/reservas"
              className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/reservas') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Reservas
            </Link>
            <Link to="/admin">
              <Button
                variant="outline"
                className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
              >
                Login Administrativo
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                  isActive('/') ? 'text-[#2E7D32]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/trilhas"
                className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                  isActive('/trilhas') ? 'text-[#2E7D32]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trilhas
              </Link>
              <Link
                to="/eventos"
                className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                  isActive('/eventos') ? 'text-[#2E7D32]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link
                to="/reservas"
                className={`font-['Poppins'] font-medium transition-colors hover:text-[#2E7D32] ${
                  isActive('/reservas') ? 'text-[#2E7D32]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Reservas
              </Link>
              <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                >
                  Login Administrativo
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
