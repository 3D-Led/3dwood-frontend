'use client'

import Header from "./components/header"
import Footer from "./components/footer"
import Scategory from "@/app/components/SCategory"
import SLaunch from "@/app/components/SLaunch"
import BannerCarousel from "./components/BannerCarousel"
import SuperBanner from "./components/SSuperBanner"
import { useEffect } from "react";

export default function Home() {
  useEffect(() =>{

},[])

  return (
    <>
    <Header />
    <BannerCarousel />
    <Scategory />
    <SuperBanner type ="BANNER1" />
    <SLaunch/>
    <SuperBanner type ="BANNER2" />

    <Footer />
    </>
  )
}