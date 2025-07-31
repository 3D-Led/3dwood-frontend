"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuLinks = [
    { label: "Produtos", href: "/produtos" },
    { label: "Quem Somos", href: "/about" },
    { label: "Galeria", href: "/galeria" },
    { label: "Contato", href: "/contato" },
  ];

  const categoryLinks = [
    { label: "Todos", href: "/produtos" },
    { label: "Lançamentos", href: "/category/lancamentos" },
    { label: "Pendentes", href: "/category/pendentes" },
    { label: "Arandelas", href: "/category/arandelas" },
    { label: "Abajures", href: "/category/abajures" },
    { label: "Colunas", href: "/category/colunas" },
    { label: "Lanternas", href: "/category/lanternas" },
  ];

  return (
    <header className="w-full font-['Roboto']">
      {/* Menu Superior */}
      <div className="w-full bg-[#96886E]">
        <nav className="flex justify-between items-center px-4 py-2 md:justify-end">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex gap-4">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black px-5 py-2 text-base font-medium hover:bg-[#ccc]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        {/* Mobile menu (dropdown) */}
        {mobileMenuOpen && (
          <div className="flex flex-col md:hidden bg-[#96886E] px-4 pb-4">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black py-2 font-medium hover:bg-[#ccc]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Logo */}
      <div className="bg-[#1C1A17] flex justify-left">
        <Link href="/">
          <img
            src="/images/2022BC.png"
            alt="Logo"
            className="w-[200px] md:w-[297px] h-[200px] md:h-[300px] object-contain"
          />
        </Link>
      </div>

      {/* Menu Inferior (sempre centralizado) */}
      <div className="w-full">
        <nav className="flex flex-wrap justify-center gap-4 p-2">
          {categoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black px-4 py-2 text-base font-medium hover:bg-[#ccc]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
