"use client";

import { useEffect, useState } from "react";
import { BannerService } from "@/services/bannerService";
import Link from "next/link";

interface Banner {
  imgUrl: string;
}

export default function ProductRelations({ type }: { type: string }) {
  const [banner, setBanner] = useState<Banner | null>(null);
  const bannerService = new BannerService();

  useEffect(() => {
    bannerService
      .getAllBanners(type)
      .then((response) => { 
        setBanner(response.data[0] || null);
      })
      .catch((error) => {
        console.log("Erro ao carregar o banner: " + error);
      });
  }, [type]);

  if (!banner) return null;

  return (
    <div className="w-full h-[400px] mt-12 flex items-center justify-center overflow-hidden">
      <Link href="">
        <img
          src={banner.imgUrl}
          alt="Banner"
          className="max-w-full max-h-full object-contain"
        />
      </Link>
    </div>
  );
}
