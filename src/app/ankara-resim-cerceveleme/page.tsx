"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Star } from 'lucide-react';

export default function AnkaraCercevelemePage() {
  const navLinks = [
    { name: "Anasayfa", id: "/" },
    { name: "Hakkımızda", id: "about" },
    { name: "Fiyatlandırma", id: "pricing" },
    { name: "İletişim", id: "contact" },
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleCentered navItems={navLinks} />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardGallery
                title="Ankara Resim ve Tablo Çerçeveleme"
                description="Sanat eserleriniz için profesyonel, modern ve dayanıklı çerçeveleme çözümleri. Ankara'nın merkezinde 50 yıllık tecrübe."
                background={{ variant: "plain" }}
                mediaItems={[{ imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000", imageAlt: "Frame 1" }, { imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000", imageAlt: "Frame 2" }, { imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000", imageAlt: "Frame 3" }]}
                mediaAnimation="slide-up"
            />
        </div>

        <div id="about" data-section="about">
            <AboutMetric
                title="Hakkımızda"
                metrics={[{ icon: Star, label: "Yıllık Deneyim", value: "50+" }, { icon: Star, label: "Mutlu Müşteri", value: "10K+" }]}
                metricsAnimation="slide-up"
                useInvertedBackground={false}
            />
        </div>

        <div id="pricing" data-section="pricing">
            <PricingCardNine
                title="Fiyatlandırma"
                description="Tablo ve çerçeve modellerimize göre değişen uygun fiyatlı seçenekler."
                plans={[{ id: "p1", title: "Başlangıç", price: "₺150", period: "/adet", features: ["Basit çerçeve", "Standart cam"], button: { text: "Seç" } }]}
                animationType="slide-up"
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="features" data-section="features">
            <FeatureCardSixteen
                title="Çerçeveleme Süreci"
                description="Adım adım profesyonel çerçeveleme."
                negativeCard={{ items: ["Ucuz malzeme", "Dayanıksız"] }}
                positiveCard={{ items: ["Ahşap çerçeve", "Özel cam"] }}
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
            />
        </div>

        <div id="metrics" data-section="metrics">
            <MetricCardOne
                title="Neden Deniz Çerçeve"
                description="Ankara'nın köklü çerçeveleme merkezi."
                metrics={[{ id: "m1", value: "50", title: "Yıl", description: "Tecrübe", icon: Star }]}
                gridVariant="uniform-all-items-equal"
                animationType="slide-up"
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardFive
                title="Galeri"
                description="Müşterilerimizin eserleri."
                testimonials={[{ id: "t1", name: "Ahmet Y.", date: "2024", title: "Harika", quote: "Çok memnun kaldım.", tag: "Çerçeveleme", avatarSrc: "https://i.pravatar.cc/100" }]}
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqDouble
                title="Sıkça Sorulan Sorular"
                description="Merak ettiklerinizi burada bulabilirsiniz."
                faqs={[{ id: "f1", title: "Süre ne kadar?", content: "Genelde 2-3 iş günü." }]}
                faqsAnimation="slide-up"
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactCenter
                tag="İletişim"
                title="Teklif Formu"
                description="İhtiyacınızı belirtin, size özel fiyat teklifi hazırlayalım."
                background={{ variant: "plain" }}
                useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterSimple
                columns={[{ title: "Deniz Çerçeve", items: [{ label: "İletişim", href: "#contact" }] }]}
                bottomLeftText="© 2025 Deniz Çerçeve"
                bottomRightText="Tüm hakları saklıdır."
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
