import React, { useState } from 'react'

interface HeaderProps {
  setActiveSection: (section: 'about' | 'bjj' | null) => void;
  activeSection: 'about' | 'bjj' | null;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Brazilian Jiu Jitsu', href: '#bjj' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contacts', href: '#contacts' },
    { name: 'Spots', href: '#spots' }
  ]

  return (
    <header className="bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo con foto */}
          <div className="flex-shrink-0 mr-8">
     <img
       src="/public/LOGO-CLUB019.png"
       alt="Logo Club019"
       className="w-16 h-16 object-contain rounded-full shadow-lg bg-white"
     />
   </div>



          {/* Desktop Navigation - spostato più a sinistra */}
          <nav className="hidden md:flex space-x-12 -ml-20">
            {menuItems.map((item) => {
              if (item.name === 'About Us' || item.name === 'Brazilian Jiu Jitsu') {
                const section = item.name === 'About Us' ? 'about' : 'bjj';
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      if (activeSection !== section) {
                        setActiveSection(section);
                        setTimeout(() => {
                          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      } else {
                        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white hover:text-[#e10412] px-5 py-3 rounded-md text-xl font-bold transition-colors duration-200 relative group drop-shadow-lg"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#e10412] transition-all duration-200 group-hover:w-full"></span>
                  </a>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#e10412] px-5 py-3 rounded-md text-xl font-bold transition-colors duration-200 relative group drop-shadow-lg"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#e10412] transition-all duration-200 group-hover:w-full"></span>
                </a>
              );
            })}
          </nav>



          {/* Mobile menu button - spostato più a destra */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#e10412] focus:outline-none focus:text-[#e10412] transition-colors duration-200"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/20 backdrop-blur-md border-t border-white/30">


              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#e10412] block px-3 py-3 rounded-md text-xl font-bold transition-colors duration-200 drop-shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 