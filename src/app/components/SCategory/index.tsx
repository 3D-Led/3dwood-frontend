"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import CategoryService from "@/services/categoryService";
import { Category } from "@/types/Category";

export default function Scategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryService = new CategoryService();

  useEffect(() => {
    categoryService.getAll()
      .then((response) => {
        console.log("Dados recebidos:", response.data);
        setCategories(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Erro ao carregar categorias:", error);
      });
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Categorias</h2>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-50 p-4 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <figure>
                <Link href={`/category/${category.name.toLowerCase()}`}>
                  <img
                    src={category.imgCategoryUrl}
                    alt={category.name}
                    width="300"
                    height="300"
                    decoding="async"
                    loading="lazy"
                    className="w-full h-60 object-cover rounded-xl mb-3"
                  />
                </Link>
                <figcaption className="text-center text-lg font-semibold text-gray-700">
                  {category.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        {/* Botão de Todos os Produtos */}
        <div className="mt-10 text-center">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-gray-800 transition">
            Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
}
