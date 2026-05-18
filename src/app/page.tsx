"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Box, History, MapPin, Users, CheckCircle, Package } from "lucide-react";

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
      buttons={[{ text: "Teklif Al", href: "#contact" }, { text: "WhatsApp’tan Yaz", href: "#" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=1", imageAlt: "Çerçeveleme atölyesi" },
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-painter-indoors_23-2150182578.jpg", imageAlt: "Tuval imalatı" },
        { imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg", imageAlt: "Şövale ürünleri" }
      ]}
      mediaAnimation="slide-up"
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
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", brand: "Profesyonel", name: "Tuval Üretimi", price: "Teklif Al", rating: 5, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1" },
        { id: "p2", brand: "Özel Üretim", name: "Resim Çerçeveleme", price: "Teklif Al", rating: 5, reviewCount: "200", imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1" },
        { id: "p3", brand: "Endüstriyel", name: "Kanvas Şase", price: "Teklif Al", rating: 4, reviewCount: "90", imageSrc: "http://img.b2bpic.net/free-photo/top-view-arrangement-with-canvas-brush-white-background_23-2148391876.jpg" },
      ]}
      title="Özel Üretim Çözümleri"
      description="Her projeye özel, yüksek kalite ve tam uyumlu üretim."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      title="Wholesale ve Kurumsal İş Ortaklıkları"
      description="Toplu siparişlerde hızlı teslimat ve özel fiyat avantajları sunuyoruz."
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Toplu İmalat", description: "Yüksek adetli siparişlerinizde seri ve kaliteli üretim.", imageSrc: "http://img.b2bpic.net/free-photo/skeletons-near-lumber-board_23-2147905207.jpg" },
        { title: "Kurumsal Destek", description: "Projelerinize özel danışmanlık ve ölçü desteği.", imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-painting-canvas_23-2150182599.jpg" },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      title="Güven ve Kalite ile 50 Yıl"
      tag="Neden Biz?"
      metrics={[
        { id: "t1", value: "50+", description: "Yıllık Sektörel Tecrübe" },
        { id: "t2", value: "100%", description: "Yerli Ankara Üretimi" },
        { id: "t3", value: "%98", description: "Müşteri Memnuniyeti" },
      ]}
      useInvertedBackground={true}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Fırat Bey", date: "3 ay önce", title: "Harika İşçilik", quote: "Çerçeveye de tuval üzerine yapılan siyah beyaz baskıya da bayıldım.", tag: "Sanatçı", avatarSrc: "http://img.b2bpic.net/free-photo/expressive-man-is-posing-studio_176474-59266.jpg" },
        { id: "2", name: "Gürcan ATEŞ", date: "3 ay önce", title: "Kaliteli İşletme", quote: "Her ölçüde istediğiniz tuvali bulabileceğiniz, samimi bir işletme.", tag: "Müşteri", avatarSrc: "http://img.b2bpic.net/free-photo/artist-painting-studio_23-2148017592.jpg" },
      ]}
      title="Sanatçıların Tercihi"
      description="Bizimle çalışan profesyonellerin deneyimleri."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Özel ölçü üretim yapıyor musunuz?", content: "Evet, tüm ürünlerimizde ihtiyacınız olan özel ölçülerde üretim sağlıyoruz." },
        { id: "q2", title: "Toplu sipariş verebilir miyiz?", content: "Evet, kurumsal ve toptan siparişlerinizde özel fiyat tekliflerimiz mevcuttur." },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Deniz Çerçeve hakkında bilmeniz gerekenler."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Teklif İsteyin"
      title="Detaylı Ürün İsteği"
      description="Ürün türünü, adetini ve varsa özel ölçülerini bize bildirin, en kısa sürede dönüş yapalım."
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      imageSrc="http://img.b2bpic.net/free-photo/art-concept-with-canvas-supplies_23-2148577653.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Deniz Çerçeve", items: [{ label: "Hakkımızda", href: "#about" }, { label: "İletişim", href: "#contact" }] },
        { title: "Ürünler", items: [{ label: "Tuval", href: "#products" }, { label: "Çerçeve", href: "#products" }] },
      ]}
      bottomLeftText="© 2024 Deniz Çerçeve. Tüm hakları saklıdır."
      bottomRightText="Ankara, Türkiye"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
