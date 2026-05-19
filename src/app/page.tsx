"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import { Award, Box, Users, Phone, MessageCircle, FileText } from "lucide-react";

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
        { text: "WhatsApp", href: "#" },
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
      description="Siparişinizden teslimata kadar şeffaf süreç."
      metrics={[
        { id: "1", value: "1", description: "Ölçülerinizi ve ihtiyacınızı bize bildirin." },
        { id: "2", value: "2", description: "Size en uygun teklifi hazırlayalım." },
        { id: "3", value: "3", description: "Atölyemizde özenle üretimini yapalım." },
        { id: "4", value: "4", description: "Ankara’da kapınıza kadar ulaştıralım." }
      ]}
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="split"
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
        { id: "p1", name: "Tuval Üretimi", price: "Özel Fiyat", imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1" },
        { id: "p2", name: "Resim Çerçeveleme", price: "Özel Fiyat", imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1" },
        { id: "p3", name: "Tuvale Baskı", price: "Özel Fiyat", imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286577.jpg?_wi=1" },
      ]}
      title="Ürünlerimiz"
      description="Özel ölçü imkanı ile imalattan direkt satış."
    />
  </div>

  <div id="pricing" data-section="pricing">
    <PricingCardOne
      title="Fiyatlandırma Yaklaşımımız"
      description="Kaliteyi uygun fiyatla birleştiriyoruz."
      plans={[
        { id: "standard", badge: "Ekonomik", price: "Teklif İste", subtitle: "Standart ölçülerde seri üretim", features: ["Hızlı teslimat", "Standart çerçeve modelleri", "Ücretsiz keşif"] },
        { id: "premium", badge: "Profesyonel", price: "Teklif İste", subtitle: "Sanatçılar ve galeriler için", features: ["Özel tasarım çerçeve", "Müze kalitesi koruma", "Kişiye özel renk seçenekleri"] }
      ]}
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{ items: ["Aracı komisyon yok", "Kalitesiz malzeme yok", "Gecikmeli teslimat yok"] }}
      positiveCard={{ items: ["1974’ten beri kalite", "İmalattan aracısız satış", "Özel ölçü üretim"] }}
      title="Neden Deniz Çerçeve?"
      description="Ankara'da çerçeve ve tuvalin gerçek adresi. Yerel üretim gücü ve 50 yıllık tecrübemizle sanatınıza değer katıyoruz."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <HeroBillboardGallery
        title="Atölyemizden Görüntüler"
        description="Üretim sürecimiz ve tamamlanmış eserlerimiz."
        mediaItems={[
          { imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=1" },
          { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-painter-indoors_23-2150182578.jpg?_wi=2" },
          { imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg?_wi=2" }
        ]}
        mediaAnimation="blur-reveal"
        background={{ variant: "plain" }}
      />
  </div>

  <div id="seo" data-section="seo">
    <ContactText
      text="Ankara çerçeve ve tuval ihtiyacınızda, 50 yıllık köklü geçmişimizle profesyonel çözümler sunuyoruz. Çankaya, Yenimahalle ve tüm Ankara bölgesine hızlı teslimat ve özel ölçü imkanı ile hizmet vermekteyiz. Sanat eserlerinizi en iyi koruyacak çözümler için bizimle iletişime geçin."
      background={{ variant: "plain" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      faqs={[
        { id: "q1", title: "Özel ölçü üretim yapıyor musunuz?", content: "Evet, tüm ürünlerimizde ihtiyacınız olan özel ölçülerde üretim sağlıyoruz." },
        { id: "q2", title: "Toplu sipariş verebilir miyiz?", content: "Kanvas üreticileri ve işletmeler için adetli ve toplu üretim imkanımız mevcuttur." },
        { id: "q3", title: "Teslimat süresi nedir?", content: "Standart ürünler 2-3 iş günü, özel çerçeveler ise projenin detayına göre planlanır."
        }
      ]}
      title="Sıkça Sorulan Sorular"
      description="Merak ettiğiniz her şey burada."
      faqsAnimation="slide-up"
      textboxLayout="split"
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

  <div id="contact-details" data-section="contact-details">
      <ContactText
      text="Adres: Ankara Merkez / Türkiye | Çalışma Saatleri: 09:00 - 19:00"
      background={{ variant: "plain" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Deniz Çerçeve", items: [{ label: "Hakkımızda", href: "#about" }, { label: "İletişim", href: "#contact" }] },
        { title: "Ürünler", items: [{ label: "Tuval", href: "#products" }, { label: "Çerçeve", href: "#products" }] },
      ]}
      bottomLeftText="© 2025 Deniz Çerçeve. Tüm hakları saklıdır."
      bottomRightText="Ankara, Türkiye"
    />
  </div>
  
  <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex md:hidden p-2">
    <a href="tel:+905550000000" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><Phone className="size-5" />Ara</a>
    <a href="https://wa.me/905550000000" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><MessageCircle className="size-5" />WhatsApp</a>
    <a href="#quote" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><FileText className="size-5" />Teklif</a>
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
