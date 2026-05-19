"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import { Award, Box, Users, Phone, MessageCircle, FileText, MapPin } from "lucide-react";

export default function LandingPage() {
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
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Anasayfa", id: "hero" },
        { name: "Hakkımızda", id: "about" },
        { name: "Ürünler", id: "products" },
        { name: "SSS", id: "faq" },
        { name: "İletişim", id: "contact" },
        { name: "Teklif Al", id: "quote" }
      ]}
      brandName="Deniz Çerçeve"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Ankara’da Çerçeve, Tuval ve Kanvas Şase İçin Hızlı Teklif Alın"
      description="1974’ten beri üç kuşak tecrübeyle, imalattan aracısız satış ve özel ölçü üretim hizmetinizdeyiz."
      buttons={[
        { text: "Teklif Al", href: "#quote" },
        { text: "Yol Tarifi", href: "https://www.google.com/maps/search/?api=1&query=Deniz+Çerçeve+Ankara" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=1", imageAlt: "Çerçeveleme atölyesi" },
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-painter-indoors_23-2150182578.jpg?_wi=1", imageAlt: "Tuval imalatı" },
        { imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg?_wi=1", imageAlt: "Şövale ürünleri" }
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="process" data-section="process">
    <MetricCardTwo
      title="4 Adımda Özel Üretim"
      description="Sanat eserlerinizi korumak için güvenilir ve şeffaf bir süreç yürütüyoruz."
      metrics={[
        { id: "1", value: "1", description: "Fotoğrafınızı veya eser ölçülerini bize gönderin." },
        { id: "2", value: "2", description: "Size en uygun çerçeve modellerimizi önerelim." },
        { id: "3", value: "3", description: "Fiyat ve teslimat süresini onaylayın." },
        { id: "4", value: "4", description: "Onayınızla birlikte çerçeveleme başlasın." }
      ]}
      buttons={[{ text: "Hemen Teklif Al", href: "#quote" }]}
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="split-actions"
      useInvertedBackground={false}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Üç Kuşaklık Zanaat ve Tecrübe"
      metrics={[
        { icon: Award, label: "Tecrübe", value: "50+ Yıl" },
        { icon: Box, label: "İmalat", value: "100%" },
        { icon: Users, label: "Memnun Müşteri", value: "10.000+" },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Tuval Üretimi", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1", priceButtonProps: { href: "#quote" } },
        { id: "p2", name: "Resim Çerçeveleme", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1", priceButtonProps: { href: "#quote" } },
        { id: "p3", name: "Tuvale Baskı", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286577.jpg?_wi=1", priceButtonProps: { href: "#quote" } },
      ]}
      title="Ürünlerimiz"
      description="Özel ölçü imkanı ile imalattan direkt satış."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      faqs={[
        { id: "q1", title: "Çerçeveleme fiyatlandırması nasıl yapılıyor?", content: "Fiyatlarımız eserinizin boyutu, çerçeve modeli ve malzeme seçimine göre özel olarak hesaplanmaktadır." },
        { id: "q2", title: "WhatsApp üzerinden fiyat alabilir miyim?", content: "Evet, eserinizin fotoğrafını ve yaklaşık ölçülerini WhatsApp hattımızdan göndererek detaylı bilgi alabilirsiniz." },
        { id: "q3", title: "Puzzle çerçeveleme yapıyor musunuz?", content: "Puzzlelarınız için özel camlı veya camsız, uzun ömürlü çerçeveleme çözümleri sunuyoruz." },
        { id: "q4", title: "Diploma çerçeveleme süreci nasıl işliyor?", content: "Diplomalarınız için hem prestijli hem de eseri koruyan paspartulu çerçeve seçeneklerimiz mevcuttur." },
        { id: "q5", title: "Forma çerçeveleme hizmetiniz var mı?", content: "Evet, imzalı veya hatıra formalarınız için derinlikli özel forma çerçeveleri hazırlıyoruz." },
        { id: "q6", title: "Büyük boyutlu sanat eserleri için çözümünüz nedir?", content: "Devasa boyutlardaki kanvas ve resimleriniz için özel şase imalatı ve güçlendirilmiş çerçeveleme hizmeti veriyoruz." }
      ]}
      buttons={[{ text: "Sorunuz mu var? Teklif Alın", href: "#quote" }]}
      title="Sıkça Sorulan Sorular"
      description="Merak ettiğiniz her şey burada."
      faqsAnimation="slide-up"
      textboxLayout="split-actions"
      useInvertedBackground={true}
    />
  </div>

  <div id="quote" data-section="quote">
      <ContactCenter
      tag="Fiyat Teklifi"
      title="Projeniz İçin Teklif Alın"
      description="Ölçülerinizi ve detayları yazın, en kısa sürede size ulaşalım."
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Deniz Çerçeve", items: [{ label: "Hakkımızda", href: "#about" }, { label: "Yol Tarifi", href: "https://www.google.com/maps/search/?api=1&query=Deniz+Çerçeve+Ankara" }] },
        { title: "Ürünler", items: [{ label: "Teklif Al", href: "#quote" }, { label: "İletişim", href: "#contact" }] },
      ]}
      bottomLeftText="© 2025 Deniz Çerçeve. Tüm hakları saklıdır."
      bottomRightText="Ankara, Türkiye"
    />
  </div>
  
  <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex md:hidden p-2">
    <a href="https://www.google.com/maps/search/?api=1&query=Deniz+Çerçeve+Ankara" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><MapPin className="size-5" />Konum</a>
    <a href="https://wa.me/905550000000" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><MessageCircle className="size-5" />WhatsApp</a>
    <a href="#quote" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><FileText className="size-5" />Teklif</a>
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}