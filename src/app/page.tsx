'use client'

import Header from "./components/header"
import Footer from "./components/footer"
import Scategory from "@/app/components/SCategory"
//import { ProductService } from "@/services/productService";
import { useEffect } from "react";

//const productService = new ProductService();

export default function Home() {
  useEffect(() =>{

},[])

  return (
    <>
    <Header />
    <div ><h1>Carrocel de imagens ainda tenho que fazer</h1></div>
    <Scategory />
    <Footer />
    </>
  )
}