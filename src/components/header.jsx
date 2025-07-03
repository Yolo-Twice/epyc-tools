import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo and Name */}
        <Link to="/">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ffffff] rounded-full flex items-center justify-center font-bold text-xl text-white p-4 border-4 border-red-600">
            🛠️
          </div>
          <span className="text-xl font-semibold text-white">Epyc Tools</span>
        </div>
        </Link>
         {/* Desktop Menu  */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/" className="hover:underline">About</Link>
          <Link to="/" className="hover:underline">Contact</Link>
        </nav>
        
         {/* Mobile Menu Button  */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
       {/* Mobile Menu  */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-white font-medium">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/" className="block hover:underline">About</Link>
          <Link to="/" className="block hover:underline">Contact</Link>
        </div>
      )}
       
      
    </header>
  );
}
