'use client'

import { useEffect, useState } from "react";
import { ProductService } from "@/services/productService";
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

interface Product {
  id: number;
  name: string;
  sku: number;
  ean: number;
  tamanho: string;
  imgUrl: string;
  categoryName: string;

}

export default function ProductPage({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null);

  const productService = new ProductService();

  useEffect(() => {
    productService.getById(params.id)
        .then((response) =>{
            setProduct(response.data)
        }).catch((error) => { 
            console.log("Erro ao carregar os item de lançamento: " + error)
        })
    }, [params.id]);


  return (
    <>
      <Header />
      <div className="min-h-screen w-full flex flex-col items-center px-4 py-8 bg-gray-50">
  {/* Título */}
  <div className="w-full max-w-5xl mb-8 text-center">
    <h1 className="text-3xl font-semibold text-[#96886E] font-roboto">
      {product?.name || "Produto Indisponível"}
    </h1>
  </div>

  {/* Conteúdo principal */}
  <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
    {/* Imagem */}
    <div className="flex-shrink-0 w-full lg:w-1/3">
      <img
        src={product?.imgUrl}
        alt={product?.name || "Imagem do Produto"}
        className="w-full h-64 object-cover rounded-md border"
        loading="lazy"
      />
    </div>

    {/* Informações do produto */}
    <div className="flex flex-col gap-4 w-full lg:w-2/3">
      {/* Descrição */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Descrição</h2>
        <p className="text-gray-600">Informações adicionais sobre o produto.</p>
      </div>

      {/* EAN */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">EAN</h2>
        <p className="text-gray-600">{product?.ean || "EAN indisponível"}</p>
      </div>

      {/* Tamanho */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Tamanho</h2>
        <p className="text-red-900">{product?.tamanho || "Tamanho não disponível."}</p>
      </div>
    </div>
  </div>
</div>

      <Footer />
   </> 
  );
}
    