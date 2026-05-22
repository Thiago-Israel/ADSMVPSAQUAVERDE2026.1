import { Link, useLocation } from 'react-router';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/trilhas', label: 'Trilhas' },
    { path: '/eventos', label: 'Eventos' },
    { path: '/reservas', label: 'Reservas' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary rounded-full p-2.5 group-hover:scale-110 transition-transform">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary font-['Poppins']">
                Saquarema Verde
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Ecoturismo & Sustentabilidade
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? 'default' : 'ghost'}
                  className={
                    isActive(link.path)
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/admin">
              <Button variant="outline" className="ml-2 border-primary text-primary hover:bg-primary hover:text-white">
                Login Administrativo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={isActive(link.path) ? 'default' : 'ghost'}
                  className={`w-full justify-start ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Login Administrativo
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
