"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Box, History, MapPin, Users } from "lucide-react";

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
        {
          name: "Anasayfa",
          id: "hero",
        },
        {
          name: "Hakkımızda",
          id: "about",
        },
        {
          name: "Ürünler",
          id: "products",
        },
        {
          name: "İletişim",
          id: "contact",
        },
      ]}
      brandName="Deniz Çerçeve"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Ankara’da Çerçeve, Tuval ve Kanvas Şase İçin Hızlı Teklif Alın"
      description="1974’ten beri üç kuşak tecrübeyle, imalattan aracısız satış ve özel ölçü üretim hizmetinizdeyiz."
      buttons={[
        {
          text: "Teklif Al",
          href: "#contact",
        },
        {
          text: "WhatsApp’tan Yaz",
          href: "#",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=1",
          imageAlt: "Çerçeveleme atölyesi",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-painter-indoors_23-2150182578.jpg",
          imageAlt: "Tuval imalatı",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg",
          imageAlt: "Şövale ürünleri",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/red-sign-wood-frame_23-2147960606.jpg",
          imageAlt: "Kanvas tablo üretimi",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-painting-canvas_23-2150182599.jpg",
          imageAlt: "Özel üretim çerçeve",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/skeletons-near-lumber-board_23-2147905207.jpg",
          imageAlt: "Atölye detay",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Üç Kuşaklık Zanaat ve Tecrübe"
      metrics={[
        {
          icon: Award,
          label: "Tecrübe",
          value: "50+ Yıl",
        },
        {
          icon: Box,
          label: "İmalat",
          value: "100%",
        },
        {
          icon: Users,
          label: "Memnun Müşteri",
          value: "10.000+",
        },
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
        {
          id: "p1",
          name: "Tuval Üretimi",
          price: "Teklif Al",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "Resim Çerçeveleme",
          price: "Teklif Al",
          imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1",
        },
        {
          id: "p3",
          name: "Tuvale Baskı",
          price: "Teklif Al",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286577.jpg?_wi=1",
        },
        {
          id: "p4",
          name: "Şövale Satışı",
          price: "Teklif Al",
          imageSrc: "http://img.b2bpic.net/free-photo/art-concept-with-canvas-supplies_23-2148577653.jpg?_wi=1",
        },
        {
          id: "p5",
          name: "Kanvas Şase",
          price: "Teklif Al",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-arrangement-with-canvas-brush-white-background_23-2148391876.jpg",
        },
        {
          id: "p6",
          name: "Ahşap Çerçeve",
          price: "Teklif Al",
          imageSrc: "http://img.b2bpic.net/free-photo/human-hand-holding-photo-frame_23-2147840619.jpg",
        },
      ]}
      title="Ürünlerimiz"
      description="Özel ölçü imkanı ile imalattan direkt satış."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Aracı komisyon yok",
          "Kalitesiz malzeme yok",
          "Gecikmeli teslimat yok",
        ],
      }}
      positiveCard={{
        items: [
          "1974’ten beri kalite",
          "İmalattan aracısız satış",
          "Özel ölçü üretim",
        ],
      }}
      title="Neden Deniz Çerçeve?"
      description="Ankara'da çerçeve ve tuvalin gerçek adresi."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "50+",
          title: "Yıl Tecrübe",
          description: "1974'ten beri kalite",
          icon: History,
        },
        {
          id: "m2",
          value: "3",
          title: "Kuşak",
          description: "Üç nesildir zanaat",
          icon: Users,
        },
        {
          id: "m3",
          value: "100%",
          title: "Yerli",
          description: "Ankara'da üretim",
          icon: MapPin,
        },
      ]}
      title="Başarı Rakamları"
      description="Sanatçıların ve üreticilerin tercihi."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Fırat Bey",
          date: "3 ay önce",
          title: "Harika İşçilik",
          quote: "Çerçeveye de tuval üzerine yapılan siyah beyaz baskıya da bayıldım.",
          tag: "Sanatçı",
          avatarSrc: "http://img.b2bpic.net/free-photo/expressive-man-is-posing-studio_176474-59266.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/artist-front-blank-canvas_23-2147781648.jpg?_wi=2",
          imageAlt: "smiling customer artisan workshop",
        },
        {
          id: "2",
          name: "Gürcan ATEŞ",
          date: "3 ay önce",
          title: "Kaliteli İşletme",
          quote: "Her ölçüde istediğiniz tuvali bulabileceğiniz, samimi bir işletme.",
          tag: "Müşteri",
          avatarSrc: "http://img.b2bpic.net/free-photo/artist-painting-studio_23-2148017592.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=2",
          imageAlt: "smiling customer artisan workshop",
        },
        {
          id: "3",
          name: "Funda ÜNAL",
          date: "3 ay önce",
          title: "Güler Yüz",
          quote: "İlgisi, alakası ve güler yüze ek kalite de olunca başka ne ister ki insan.",
          tag: "Yerel Rehber",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-female-artist-painting-easel-studio-art-concept-woman-draws_169016-66017.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=2",
          imageAlt: "smiling customer artisan workshop",
        },
        {
          id: "4",
          name: "Simge Kuyucuk",
          date: "3 ay önce",
          title: "Çok Memnun",
          quote: "İşçilikleri ve özenli çalışma prensiplerinden çok memnun kaldım.",
          tag: "Müşteri",
          avatarSrc: "http://img.b2bpic.net/free-photo/two-sister-showing-blank-slate-isolated-white-backdrop_23-2147890532.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286577.jpg?_wi=2",
          imageAlt: "smiling customer artisan workshop",
        },
        {
          id: "5",
          name: "Pınar ERDEM",
          date: "3 ay önce",
          title: "En Kaliteli Adres",
          quote: "Ankara'da en kaliteli ahşap çerçeveleri bulabileceğiniz adres.",
          tag: "Müşteri",
          avatarSrc: "http://img.b2bpic.net/free-photo/woman-showing-blond-female-coworker-paper-sheet_23-2148180677.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/art-concept-with-canvas-supplies_23-2148577653.jpg?_wi=2",
          imageAlt: "smiling customer artisan workshop",
        },
      ]}
      title="Müşterilerimiz Ne Diyor?"
      description="Bizi tercih eden değerli sanatçılarımız ve müşterilerimizin deneyimleri."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Özel ölçü üretim yapıyor musunuz?",
          content: "Evet, tüm ürünlerimizde ihtiyacınız olan özel ölçülerde üretim sağlıyoruz.",
        },
        {
          id: "q2",
          title: "Toplu sipariş verebilir miyiz?",
          content: "Kanvas üreticileri ve işletmeler için adetli ve toplu üretim imkanımız mevcuttur.",
        },
        {
          id: "q3",
          title: "Kargo gönderimi var mı?",
          content: "Türkiye'nin her yerine özenle paketleyerek kargo gönderimi yapıyoruz.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Deniz Çerçeve ile ilgili merak ettikleriniz."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="İletişim"
      title="Hemen Teklif Alın"
      description="Ölçünüzü ve ihtiyacınızı gönderin, size hemen dönüş yapalım."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Deniz Çerçeve",
          items: [
            {
              label: "Hakkımızda",
              href: "#about",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
          ],
        },
        {
          title: "Ürünler",
          items: [
            {
              label: "Tuval",
              href: "#products",
            },
            {
              label: "Çerçeve",
              href: "#products",
            },
            {
              label: "Şövale",
              href: "#products",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Deniz Çerçeve. Tüm hakları saklıdır."
      bottomRightText="Ankara, Türkiye"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
