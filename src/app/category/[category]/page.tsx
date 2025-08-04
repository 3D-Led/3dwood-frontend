'use client'

import { useEffect, useState } from 'react';
import { ProductService } from '@/services/productService'; 
import Style from './page.module.css';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    imgUrl: string;
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    const [products, setProducts] = useState<Product[]>([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsCategory(params.category)
        .then((response) =>{
            setProducts(response.data)
        }).catch((error) => { 
            console.log("Erro ao carregar os item: " + error)
        })
    }, [params.category]);
    
    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    return (
         <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full px-4 py-8">
              <h1 className="text-4xl font-medium text-[#96886E] font-roboto mb-6">
                {capitalizeFirstLetter(params.category)}
              </h1>

             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl w-full">
              {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between text-center"
              >
                <div className="relative w-full h-64 mb-4">
                  <Link href={`/products/${product.id}`}>
                    <img src={product.imgUrl} alt={product.name}/>
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
            </main>
            <Footer />
        </>
    );
}
