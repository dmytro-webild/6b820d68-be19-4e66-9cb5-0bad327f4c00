"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function SovalePage() {
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
        <ProductCardThree
          animationType="slide-up"
          textboxLayout="split"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={false}
          title="Profesyonel Şövale Çözümleri"
          description="Atölye ve sergileriniz için dayanıklı, ergonomik ve estetik şövale modelleri."
          products={[
            { id: "s1", name: "Masaüstü Şövale", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/artist-front-blank-canvas_23-2147781648.jpg?_wi=1", priceButtonProps: { href: "/iletisim" } },
            { id: "s2", name: "Atölye Tipi Şövale", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/medium-shot-senior-painter-indoors_23-2150182578.jpg?_wi=1", priceButtonProps: { href: "/iletisim" } },
            { id: "s3", name: "Sergi Tipi Şövale", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg?_wi=1", priceButtonProps: { href: "/iletisim" } }
          ]}
        />
        <ContactCenter
          tag="İletişim"
          title="Özel Üretim Şövale mi Arıyorsunuz?"
          description="İhtiyacınız olan boyut ve tasarım için bize ulaşın."
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={false}
        />
        <FooterSimple
          columns={[
            { title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }, { label: "İletişim", href: "/iletisim" }] },
            { title: "Ürünler", items: [{ label: "Şövale", href: "/sovale" }] },
          ]}
          bottomLeftText="© 2025 Deniz Çerçeve"
          bottomRightText="Ankara"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}