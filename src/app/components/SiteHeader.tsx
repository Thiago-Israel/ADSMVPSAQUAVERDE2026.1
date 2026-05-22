import { Link } from "react-router";
import { Button } from "./ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: '#2E7D32' }}>
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: '#2E7D32' }}>
              Saquarema Verde
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-[#2E7D32] transition-colors">
              Home
            </Link>
            <Link to="/trilhas" className="text-sm font-medium hover:text-[#2E7D32] transition-colors">
              Trilhas
            </Link>
            <Link to="/#eventos" className="text-sm font-medium hover:text-[#2E7D32] transition-colors">
              Eventos
            </Link>
            <Link to="/#reservas" className="text-sm font-medium hover:text-[#2E7D32] transition-colors">
              Reservas
            </Link>
            <Link to="/admin/login">
              <Button variant="outline" size="sm" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white">
                Login Admin
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: '#2E7D32' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: '#2E7D32' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-[#2E7D32] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/trilhas" 
              className="text-sm font-medium hover:text-[#2E7D32] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trilhas
            </Link>
            <Link 
              to="/#eventos" 
              className="text-sm font-medium hover:text-[#2E7D32] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link 
              to="/#reservas" 
              className="text-sm font-medium hover:text-[#2E7D32] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservas
            </Link>
            <Link to="/admin/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="sm" className="w-full border-[#2E7D32] text-[#2E7D32]">
                Login Admin
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
