'use client'

import Header from "./components/header"
import Footer from "./components/footer"
import Scategory from "@/app/components/SCategory"
import BannerCarousel from "./components/BannerCarousel"
import { useEffect } from "react";

//const productService = new ProductService();

export default function Home() {
  useEffect(() =>{

},[])

  return (
    <>
    <Header />
    <BannerCarousel />
    <Scategory />
    <Footer />
    </>
  )
}