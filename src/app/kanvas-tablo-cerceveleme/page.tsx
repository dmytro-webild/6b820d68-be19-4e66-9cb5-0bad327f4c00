"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { Palette, Ruler, CheckCircle } from "lucide-react";

export default function CanvasFramingPage() {
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
            <NavbarStyleCentered
            navItems={[
                { name: "Anasayfa", id: "hero" },
                { name: "Hakkımızda", id: "about" },
                { name: "Süreç ve Fiyat", id: "pricing" },
                { name: "SSS", id: "faq" },
                { name: "İletişim", id: "contact" },
            ]}
            brandName="Deniz Çerçeve"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardGallery
                title="Modern Kanvas Tablo Çerçeveleme"
                description="Sanat eserleriniz için Ankara'nın en modern ve dayanıklı çerçeveleme çözümleri. 50 yıllık tecrübeyle."
                mediaItems={[
                    { imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1" },
                    { imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1" },
                    { imageSrc: "http://img.b2bpic.net/free-photo/art-concept-with-canvas-supplies_23-2148577653.jpg?_wi=1" }
                ]}
                buttons={[{ text: "Teklif Al", href: "#contact" }]}
            />
        </div>

        <div id="about" data-section="about">
            <AboutMetric
                title="Neden Biziz?"
                metrics={[
                    { icon: Ruler, label: "Tecrübe", value: "50 Yıl" },
                    { icon: Palette, label: "Kalite", value: "%98" },
                    { icon: CheckCircle, label: "Üretim", value: "Yerli" }
                ]}
                metricsAnimation="slide-up"
                useInvertedBackground={false}
            />
        </div>

        <div id="pricing" data-section="pricing">
            <PricingCardTwo
                title="Çerçeveleme Hizmetleri"
                plans={[
                    { id: "p1", badge: "Başlangıç", price: "Özel", subtitle: "Standart Çözümler", buttons: [{ text: "Seç", href: "#contact" }], features: ["Özel ölçü", "Hızlı teslimat"] },
                    { id: "p2", badge: "Profesyonel", price: "Özel", subtitle: "Premium Çözümler", buttons: [{ text: "Seç", href: "#contact" }], features: ["UV Cam", "Modern Çerçeve"] },
                    { id: "p3", badge: "Kurumsal", price: "Özel", subtitle: "Toplu Projeler", buttons: [{ text: "Seç", href: "#contact" }], features: ["Yerinde Montaj", "İndirim"] }
                ]}
                animationType="slide-up"
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqDouble
                title="Sıkça Sorulan Sorular"
                faqs={[
                    { id: "f1", title: "Özel ölçü yapıyor musunuz?", content: "Evet, tüm kanvaslarınız için tam ölçünüze özel üretim sağlıyoruz." },
                    { id: "f2", title: "Ankara içi nakliye var mı?", content: "Evet, Ankara geneline profesyonel montaj ve nakliye hizmetimiz vardır." }
                ]}
                faqsAnimation="slide-up"
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactCenter
                tag="İletişim"
                title="Hemen Teklif Alın"
                description="Tablo ölçülerinizi iletin, fiyatlandıralım."
                background={{ variant: "plain" }}
                useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterSimple
                logoText="Deniz Çerçeve"
                columns={[
                    { title: "Hizmetler", items: [{ label: "Çerçeveleme", href: "#" }] },
                    { title: "İletişim", items: [{ label: "Ankara", href: "#" }] }
                ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
