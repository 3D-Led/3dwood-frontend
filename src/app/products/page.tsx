'use client'

import { useEffect, useState } from 'react';
import { ProductService } from '@/services/productService'; 
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    imgUrl: string;
}

export default function CategoryPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getAll()
        .then((response) =>{
            setProducts(response.data)
        }).catch((error) => { 
            console.log("Erro ao carregar os item: " + error)
        })
    }, []);
  

    return ( 
         <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full px-4 py-8">
              <h1 className="text-4xl font-medium text-[#96886E] font-roboto mb-6">
                Todos Produtos
              </h1>

             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl w-full">
              {products.map((product) => (
               <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between text-center"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="w-full h-64 mb-6 flex items-center justify-center bg-gray-100 rounded">
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-60 object-contain rounded-xl bg-white"
                    />
                  </div>
                </Link>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                  <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
                    Ver detalhes
                  </Link>
                </div>
              </div>

              ))}
        </div>
            </main>
            <Footer />
        </>
    );
}
