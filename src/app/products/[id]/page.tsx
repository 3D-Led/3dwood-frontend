'use client'

import { useEffect, useState } from "react";
import { ProductService } from "@/services/productService";
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import SProductRelations from "@/app/components/SProductRelations"

interface Product {
  id: number;
  descriptions: string;
  name: string;
  sku: number;
  ean: number;
  size: string;
  imgUrl: string;
  categoryName: string;
  imgs: string[];
}

export default function ProductPage({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const allImages = product ? [product.imgUrl, ...(product.imgs || [])] : [];

  const productService = new ProductService();

  useEffect(() => {
    productService.getById(params.id)
      .then((response) => {
        setProduct(response.data)
      }).catch((error) => {
        console.log("Erro ao carregar os item de lançamento: " + error)
      })
  }, [params.id]);
   function formatStringWithLineBreaksHTML(input?: string): string {
    if (!input) return "";
    return input.split(";").map(part => part.trim()).join("<br />");
  }

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
          
          {/* Imagem principal + carrossel de miniaturas */}
          <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
            {/* Imagem principal */}
            <div
              className="w-full cursor-pointer"
              onClick={() => {
                setCurrentImgIndex(0);
                setIsModalOpen(true);
              }}
            >
              <img
                src={product?.imgUrl}
                alt={product?.name || "Imagem do Produto"}
                className="w-full h-[500px] object-contain rounded-md"
              />
            </div>

            {/* Miniaturas */}
            <div className="flex gap-2 overflow-x-auto w-full">
              {product && allImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index}`}
                  className="h-20 w-20 object-cover rounded cursor-pointer border border-gray-200 hover:border-black"
                  onClick={() => {
                    setCurrentImgIndex(index);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Informações do produto */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
           {/* SKU */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Código</h2>
              <p className="text-gray-600">{product?.sku || "Codigo indisponível"}</p>
            </div>
            {/* Descrição */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Descrição</h2>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: formatStringWithLineBreaksHTML(product?.descriptions) || "Descrição não disponível.",
                }}>
               </p>
            </div>

            {/* EAN */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">EAN</h2>
              <p className="text-gray-600">{product?.ean || "EAN indisponível"}</p>
            </div>

            {/* Tamanho */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Tamanho</h2>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: formatStringWithLineBreaksHTML(product?.size) || "Tamanho não disponível.",
                }}>
               </p>
            </div>
          </div>
        </div>

        {/* Produtos relacionados */}
        {product?.categoryName && (
          <SProductRelations category={product.categoryName} />
        )}
      </div>

      <Footer />

      {/* Modal com carrossel */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-4xl p-4">
            {/* Botão Fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* Imagem Atual */}
            <img
              src={allImages[currentImgIndex]}
              alt={`Imagem ${currentImgIndex}`}
              className="w-full h-[500px] object-contain rounded"
            />

            {/* Navegação */}
            <div className="flex justify-between mt-4 text-white">
              <button
                onClick={() =>
                  setCurrentImgIndex((prev) =>
                    prev === 0 ? allImages.length - 1 : prev - 1
                  )
                }
                className="text-3xl px-4"
              >
                &#8592;
              </button>
              <button
                onClick={() =>
                  setCurrentImgIndex((prev) =>
                    prev === allImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="text-3xl px-4"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
