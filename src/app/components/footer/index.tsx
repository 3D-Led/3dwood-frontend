"use client";
import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { NewsLetterService } from "@/services/newsletterService";

export default function Footer() {
  const institucionalLinks = [
    { label: "Quem Somos", href: "/about" },
    { label: "Galeria", href: "/galeria" },
    { label: "Produtos", href: "/products" },
  ];

  const categorias = [
    { label: "Todos", href: "/products" },
    { label: "Lançamento", href: "/category/lancamentos" },
    { label: "Pendentes", href: "/category/pendentes" },
    { label: "Arandelas", href: "/category/arandelas" },
    { label: "Abajures", href: "/category/abajures" },
    { label: "Colunas", href: "/category/colunas" },
    { label: "Lanternas", href: "/category/lanternas" },
  ];

  // Estados para nome, email, loading e mensagem
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const newsLetterService = new NewsLetterService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!name.trim() || !email.trim()) {
      setMessage("Por favor, preencha nome e e-mail.");
      return;
    }

    setLoading(true);
    try {
      const response = await newsLetterService.insert({ name, email });
      setMessage("Inscrição realizada com sucesso!");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Erro ao enviar inscrição. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

        {/* REDES SOCIAIS */}
        <div className="hidden md:block md:w-[350px]">
          <h2 className="text-[#96886E] text-lg mb-4 underline">Siga-nos!</h2>
          <a
            href="https://instagram.com/3dwoodlustres"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-12 h-12" />
          </a>
        </div>

        {/* NEWSLETTER E CONTATO (visível em todas as telas) */}
        <div className="w-full mt-10 md:mt-0 md:w-[350px]">
          <h2 className="text-[#96886E] text-lg mb-4 underline">Newsletter</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-3 py-2 text-black bg-white rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-3 py-2 text-black bg-white rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#96886E] text-white px-4 py-2 rounded hover:bg-[#7e725c] disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Inscrever"}
            </button>
          </form>
          {/* Mensagem de feedback */}
          {message && (
            <p
              className={`mt-2 ${
                message.includes("sucesso") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

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
