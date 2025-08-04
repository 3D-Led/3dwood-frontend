'use client';

import { useEffect, useState } from "react";
import { BannerService } from "@/services/bannerService";

interface Banner {
  imgUrl: string;
}

export default function BannerCarousel() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState(0);
  const bannerService = new BannerService();

  useEffect(() => {
    bannerService.getAll()
      .then((response) => {
        console.log(response.data); 
        setBanners(response.data);
      })
      .catch((error) => {
        console.log("Erro ao carregar os banners: " + error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (banners.length) {
        setCurrent((prev) => (prev + 1) % banners.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div className="hidden lg:block w-full h-[400px] overflow-hidden relative rounded-md shadow-md">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner.imgUrl}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
}
