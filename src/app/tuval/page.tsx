"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function TuvalPage() {
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
            title="Tuval ve Şase İmalatı"
            description="Sanatçılar için profesyonel tuval, şövale ve özel kanvas şase üretim hizmetlerimizle imalattan direkt satış yapıyoruz."
            mediaItems={[
                { imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=1", imageAlt: "Tuval" },
                { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-painter-indoors_23-2150182578.jpg?_wi=1", imageAlt: "Resim üretimi" },
                { imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg?_wi=1", imageAlt: "Şövale" }
            ]}
            mediaAnimation="slide-up"
        />
        <ContactCenter
            tag="Fiyat Teklifi"
            title="Tuval Üretimi İçin Teklif Alın"
            description="İstediğiniz ölçülerde kanvas şase üretimi için formu doldurun."
        />
        <FooterSimple
            columns={[{ title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}