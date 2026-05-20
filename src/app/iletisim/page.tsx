"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ContactCenter from '@/components/sections/contact/ContactCenter';

export default function ContactPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <NavbarStyleCentered
          navItems={[
            { name: "Anasayfa", id: "/" },
            { name: "Hakkımızda", id: "/#about" },
            { name: "Ürünler", id: "/#products" },
            { name: "Şövale", id: "/sovale" },
            { name: "İletişim", id: "/iletisim" }
          ]}
          brandName="Deniz Çerçeve"
        />
        <ContactCenter
          tag="Bize Ulaşın"
          title="İletişim Bilgileri ve Destek"
          description="Ankara'daki atölyemizden tüm Türkiye'ye gönderim yapıyoruz. Sorularınız için hemen formdan bize yazın."
          background={{ variant: "gradient-bars" }}
        />
        <FooterSimple
          columns={[
            { title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }, { label: "Hakkımızda", href: "/#about" }] },
            { title: "İletişim", items: [{ label: "İletişim", href: "/iletisim" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}