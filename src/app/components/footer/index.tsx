"use client";
import Link from "next/link";

export default function Footer() {
  const institucionalLinks = [
    { label: "Quem Somos", href: "/about" },
    { label: "Galeria", href: "/galeria" },
    { label: "Contato", href: "/contato" },
    { label: "Produtos", href: "/produtos" },
  ];

  const categorias = [
    { label: "Todos", href: "/produtos" },
    { label: "Lançamento", href: "/category/lancamentos" },
    { label: "Pendentes", href: "/category/pendentes" },
    { label: "Arandelas", href: "/category/arandelas" },
    { label: "Abajures", href: "/category/abajures" },
    { label: "Colunas", href: "/category/colunas" },
    { label: "Lanternas", href: "/category/lanternas" },
  ];

  return (
    <footer className="bg-[#1C1A17] text-[#FFFCFCA3] font-['Roboto']">
      <div className="max-w-7xl mx-auto w-full px-4 py-10 md:flex md:justify-between md:items-start">
        {/* INSTITUCIONAL */}
        <div className="hidden md:block md:w-[350px]">
          <h2 className="text-[#96886E] text-lg mb-4 underline">Institucional</h2>
          <ul className="space-y-2">
            {institucionalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  &gt; {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CATEGORIAS */}
        <div className="hidden md:block md:w-[350px]">
          <h2 className="text-[#96886E] text-lg mb-4 underline">Categorias</h2>
          <ul className="space-y-2">
            {categorias.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  &gt; {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* INSTAGRAM */}
        <div className="hidden md:block md:w-[350px]">
          <h2 className="text-[#96886E] text-lg mb-4 underline">
            Siga-nos no Instagram
          </h2>
          <p className="text-sm">[@3dluzedesign](https://instagram.com/3dluzedesign)</p>
        </div>

        {/* NEWSLETTER E CONTATO (visível em todas as telas) */}
        <div className="w-full mt-10 md:mt-0 md:w-[350px]">
          <h2 className="text-[#96886E] text-lg mb-4 underline">Newsletter</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-3 py-2 text-black bg-white rounded"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-3 py-2 text-black bg-white rounded"
            />
            <button
              type="button"
              className="bg-[#96886E] text-white px-4 py-2 rounded hover:bg-[#7e725c]"
            >
              Inscrever
            </button>
          </form>

          <h2 className="text-[#96886E] text-lg mt-6 mb-2 underline">Contato</h2>
          <p className="text-sm leading-6">
            Tel: (19) 3893-5477 <br />
            comercial01@3dluzedesign.com.br <br />
            Av. Papa João XXIII, 77 - Centro <br />
            Pedreira - SP <br />
            CEP: 13920-000
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full bg-[#96886E] py-3">
        <h3 className="text-center text-[#DCD6CC] text-xs font-light">
          3D WOOD By RUSSO & FARIA COM. MAT. ELETRICO LTDA Since 2018
        </h3>
      </div>
    </footer>
  );
}
