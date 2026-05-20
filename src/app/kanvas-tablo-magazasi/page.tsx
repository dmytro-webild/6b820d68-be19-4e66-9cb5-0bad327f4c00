"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function KanvasMagazasi() {
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
          navItems={[{ name: "Anasayfa", id: "/" }, { name: "Kanvas Tablo", id: "/kanvas-tablo-magazasi" }, { name: "Şase İmalatı", id: "/kanvas-sase-imalati" }, { name: "İletişim", id: "#quote" }]}
          brandName="Deniz Çerçeve"
        />
        <div className="pt-32 pb-20 px-6">
          <h1 className="text-5xl font-bold mb-8">Kanvas Tablo Mağazası</h1>
          <p className="text-xl mb-12 text-gray-600">Eviniz veya ofisiniz için yüksek kaliteli, özel ölçü kanvas tablolarımızla sanatın estetiğini mekanlarınıza taşıyoruz.</p>
          <ProductCardThree
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            products={[
              { id: "k1", name: "Manzara Kanvaslar", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg?_wi=1", priceButtonProps: { href: "#quote" } },
              { id: "k2", name: "Modern Soyut Tablolar", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1", priceButtonProps: { href: "#quote" } },
              { id: "k3", name: "Özel Tasarım Kanvas", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=1", priceButtonProps: { href: "#quote" } }
            ]}
            title="Öne Çıkan Modeller"
            description="Koleksiyonumuzu keşfedin ve mekanınıza değer katın."
          />
        </div>
        <div id="quote"><ContactCenter title="Özel Kanvas Teklifi Alın" description="İstediğiniz ölçü ve tasarımı belirtin, hemen üretelim." tag="Teklif" /></div>
        <FooterSimple columns={[{ title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }] }]} bottomLeftText="© 2025 Deniz Çerçeve" bottomRightText="Ankara" />
      </ReactLenis>
    </ThemeProvider>
  );
}