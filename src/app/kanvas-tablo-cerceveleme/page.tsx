"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { Palette, Ruler, CheckCircle, MapPin } from "lucide-react";

export default function CanvasFramingPage() {
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
                { name: "Süreç ve Fiyat", id: "pricing" },
                { name: "İletişim", id: "contact" },
            ]}
            brandName="Deniz Çerçeve"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardDashboard
                title="Modern Kanvas Tablo Çerçeveleme"
                description="Sanat eserleriniz için Ankara'nın en modern ve dayanıklı çerçeveleme çözümleri. 50 yıllık tecrübeyle, estetik ve güvenilir bir dokunuş."
                dashboard={{
                    title: "Üretim Süreci",                    stats: [
                        { title: "Kalite", values: [98, 100, 95], description: "%98 Memnuniyet oranı" },
                        { title: "Hız", values: [90, 85, 95], description: "Hızlı teslimat garantisi" }
                    ],
                    logoIcon: Palette,
                    sidebarItems: [{ icon: Ruler, active: true }],
                    listItems: [{ icon: CheckCircle, title: "Özel Ölçü Kesim", status: "Tamamlandı" }],
                    imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1"
                }}
                buttons={[{ text: "Teklif Al", href: "#contact" }]}
            />
        </div>

        <div id="about" data-section="about">
            <MetricSplitMediaAbout
                title="Neden Bizim Çerçeveleme?"
                description="Sanat eserlerinizi zamana karşı koruyan, modern tasarımlarla bütünleştiren profesyonel dokunuşlar."
                metrics={[
                    { value: "50 Yıl", title: "Tecrübe" },
                    { value: "%100", title: "Yerli Ankara İmalatı" }
                ]}
                imageSrc="http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1"
                useInvertedBackground={false}
            />
        </div>

        <div id="pricing" data-section="pricing">
            <PricingCardTwo
                title="Çerçeveleme ve İmalat"
                plans={[
                    { id: "p1", badge: "Başlangıç", price: "Özel", subtitle: "Standart ahşap çıtalar", features: ["Özel ölçü kesim", "Hızlı teslimat"] },
                    { id: "p2", badge: "Profesyonel", price: "Özel", subtitle: "Premium malzeme", features: ["UV korumalı cam", "Modern tasarım", "Ömürlük garanti"] }
                ]}
                animationType="slide-up"
                textboxLayout="split"
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqSplitText
                sideTitle="SSS"
                sideDescription="Çerçeveleme süreci hakkında merak ettikleriniz."
                faqs={[
                    { id: "f1", title: "Özel ölçü yapıyormusunuz?", content: "Evet, tüm kanvaslarınız için tam ölçünüze özel üretim sağlıyoruz." },
                    { id: "f2", title: "Ankara içi nakliye var mı?", content: "Ankara geneline profesyonel montaj ve nakliye hizmetimiz vardır." }
                ]}
                faqsAnimation="slide-up"
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactSplit
                title="Hemen Teklif Alın"
                description="Tablo ölçülerinizi ve istediğiniz çerçeve modelini bize iletin, hemen fiyatlandıralım."
                imageSrc="http://img.b2bpic.net/free-photo/art-concept-with-canvas-supplies_23-2148577653.jpg?_wi=1"
                mediaPosition="right"
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseCard
                logoText="Deniz Çerçeve"
                columns={[
                    { title: "Hizmetler", items: [{ label: "Çerçeveleme", href: "#" }, { label: "Kanvas", href: "#" }] },
                    { title: "İletişim", items: [{ label: "Ankara, Türkiye", href: "#" }] }
                ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
