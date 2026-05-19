"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MediaAbout from '@/components/sections/about/MediaAbout';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

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
            <NavbarStyleCentered navItems={navLinks} brandName="Deniz Çerçeve" />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardGallery
                title="Ankara Resim ve Tablo Çerçeveleme"
                description="Sanat eserleriniz için profesyonel, modern ve dayanıklı çerçeveleme çözümleri. Ankara'nın merkezinde 50 yıllık tecrübe."
                background={{ variant: "plain" }}
                mediaItems={[]}
            />
        </div>

        <div id="about" data-section="about">
            <MediaAbout
                title="Hizmetlerimiz"
                description="Resim çerçeveleme, özel ölçü puzzle çerçeveleri, kanvas şase ve daha fazlası."
                useInvertedBackground={false}
            />
        </div>

        <div id="pricing" data-section="pricing">
            <PricingCardNine
                title="Fiyatlandırma"
                description="Tablo ve çerçeve modellerimize göre değişen uygun fiyatlı seçenekler."
                plans={[]}
                animationType="slide-up"
                textboxLayout="split"
            />
        </div>

        <div id="features" data-section="features">
            <FeatureCardSixteen
                title="Çerçeveleme Süreci"
                description="Adım adım profesyonel çerçeveleme."
                negativeCard={{ items: [] }}
                positiveCard={{ items: [] }}
                animationType="slide-up"
                textboxLayout="default"
            />
        </div>

        <div id="metrics" data-section="metrics">
            <MetricCardTwo
                title="Neden Deniz Çerçeve"
                description="Ankara'nın köklü çerçeveleme merkezi."
                metrics={[]}
                gridVariant="uniform-all-items-equal"
                animationType="slide-up"
                textboxLayout="split"
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardTwelve
                title="Galeri"
                testimonials={[]}
                cardAnimation="slide-up"
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqSplitText
                title="Sıkça Sorulan Sorular"
                faqs={[]}
                faqsAnimation="slide-up"
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactSplitForm
                title="Teklif Formu"
                description="İhtiyacınızı belirtin, size özel fiyat teklifi hazırlayalım."
                inputs={[]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterMedia
                logoText="Deniz Çerçeve"
                columns={[]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
