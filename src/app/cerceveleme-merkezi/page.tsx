"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function CercevelemePage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleCentered
          navItems={[
            { name: "Anasayfa", id: "/" },
            { name: "Çerçeveleme", id: "/cerceveleme-merkezi" },
            { name: "Tuval", id: "/tuval" },
            { name: "İletişim", id: "/#contact" }
          ]}
          brandName="Deniz Çerçeve"
        />
        <HeroBillboardGallery
            background={{ variant: "gradient-bars" }}
            title="Profesyonel Çerçeveleme Merkezi"
            description="Sanat eserlerinizi, diplomalarınızı ve özel anılarınızı en uygun çerçeveleme çözümleriyle ölümsüzleştiriyoruz."
            mediaItems={[
                { imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1", imageAlt: "Çerçeve seçenekleri" },
                { imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1", imageAlt: "Duvar çerçeveleme" },
                { imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286577.jpg?_wi=1", imageAlt: "Detaylı çalışma" }
            ]}
            mediaAnimation="slide-up"
        />
        <ContactCenter
            tag="Fiyat Teklifi"
            title="Çerçeveleme Teklifi Alın"
            description="Çerçevelenecek eserin detaylarını bize iletin."
        />
        <FooterSimple
            columns={[{ title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}