// components/ProductRelations.tsx
"use client";

import { useEffect, useState } from "react";
import { ProductService } from "@/services/productService";
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  imgUrl: string;

}

export default function Launch() {
  const [products, setProducts] = useState<Product[]>([]);
   const productService = new ProductService();

  useEffect(() => {
    productService.getProductsCategory("lancamentos")
        .then((response) => {
          console.log("Dados recebidos:", response.data);
          setProducts(Array.isArray(response.data) ? response.data.slice(0,8) : []);
        })
        .catch((error) => {
          console.error("Erro ao carregar categorias:", error);
        });
    }, []);


  return (
    <div className="mt-12 w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-medium text-[#96886E] font-roboto mb-6">Lançamentos</h2>      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl w-full ">
              {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between text-center"
              >
                <div className="flex items-center justify-center  ">
                  <Link href={`/products/${product.id}`}>
                    <img src={product.imgUrl} alt={product.name} className="max-h-full object-contain"/>
                  </Link>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                  <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
                    Ver detalhes
                  </Link>
                </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/category/lancamentos">
            <button className="bg-black text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-gray-800 transition">
              Todos os Lançamentos
            </button>
          </Link>
        </div>
    </div>
  );
}
