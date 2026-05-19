"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Phone, MessageCircle, FileText } from "lucide-react";

export default function AnkaraCercevelemePage() {
  const navLinks = [
    { name: "Anasayfa", id: "hero" },
    { name: "Hizmetler", id: "products" },
    { name: "SSS", id: "faq" },
    { name: "İletişim", id: "contact" },
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleApple navItems={navLinks} />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardRotatedCarousel
                title="Ankara’da Resim ve Tablo Çerçeveleme Merkezi"
                description="1974’ten beri 3 kuşak tecrübe, özel ölçü ve imalattan doğrudan satış ile sanat eserlerinizi koruyoruz."
                background={{ variant: "plain" }}
                carouselItems={[{ id: "1", imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&_wi=1" }, { id: "2", imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000&_wi=1" }, { id: "3", imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&_wi=1" }, { id: "4", imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&_wi=2" }, { id: "5", imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000&_wi=2" }, { id: "6", imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&_wi=2" }]}
            />
        </div>

        <div id="products" data-section="products">
            <ProductCardFour
                title="Hizmetlerimiz"
                description="Resim, tablo, puzzle, diploma, forma, ayna ve rölyef çerçeveleme hizmetleri."
                products={[{ id: "p1", name: "Resim & Tablo", price: "Teklif Al", variant: "standart", imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&_wi=3" }, { id: "p2", name: "Puzzle & Diploma", price: "Teklif Al", variant: "standart", imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&_wi=3" }, { id: "p3", name: "Ayna & Rölyef", price: "Teklif Al", variant: "standart", imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000&_wi=3" }]}
                gridVariant="three-columns-all-equal-width"
                animationType="slide-up"
                textboxLayout="split"
                useInvertedBackground={false}
            />
        </div>

        <div id="pricing" data-section="pricing">
            <PricingCardThree
                title="Fiyatlandırma Faktörleri"
                description="Çerçeve kalitesi, cam türü ve boyutlara göre değişkenlik gösteren fiyatlandırma."
                plans={[{ id: "f1", price: "Keşif", name: "Detaylar için teklif alın", buttons: [{ text: "Detaylar" }], features: ["Ölçüye göre üretim", "Malzeme çeşitliliği", "Profesyonel montaj"] }]}
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
            />
        </div>

        <div id="process" data-section="process">
            <MetricCardSeven
                title="4 Adımlı Süreç"
                description="İhtiyacınızı belirleyin, en kısa sürede çerçeveleyelim."
                metrics={[{ id: "1", value: "1", title: "Ölçü", items: ["Ölçüleri belirtin"] }, { id: "2", value: "2", title: "Seçim", items: ["Model seçimi"] }, { id: "3", value: "3", title: "Üretim", items: ["Özenli Üretim"] }, { id: "4", value: "4", title: "Teslimat", items: ["Teslimat & Montaj"] }]}
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
            />
        </div>

        <div id="why-choose-us" data-section="why-choose-us">
            <FeatureCardTwentyNine
                title="Neden Deniz Çerçeve?"
                description="Güvenilir zanaatkarlık, köklü geçmiş."
                features={[{ title: "Tecrübe", description: "1974'ten beri tecrübe", imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&_wi=4", titleImageSrc: "", buttonText: "İncele" }, { title: "Özelleştirme", description: "Özel ölçü imkanı", imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000&_wi=4", titleImageSrc: "", buttonText: "İncele" }]}
                gridVariant="two-columns-alternating-heights"
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqDouble
                title="Sıkça Sorulan Sorular"
                description="En çok merak edilenler."
                faqs={[{ id: "f1", title: "Özel ölçü yapıyor musunuz?", content: "Evet, her türlü eserinize özel ölçü alıyoruz." }]}
                faqsAnimation="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
            />
        </div>

        <div id="quote" data-section="quote">
            <ContactSplitForm
                title="Teklif Formu"
                description="İhtiyaçlarınızı belirtin, size özel teklif oluşturalım."
                inputs={[{ name: "name", type: "text", placeholder: "İsim" }, { name: "phone", type: "tel", placeholder: "Telefon" }, { name: "size", type: "text", placeholder: "Boyut" }, { name: "qty", type: "number", placeholder: "Adet" }]}
                textarea={{ name: "notes", placeholder: "Detaylı bilgi..." }}
                useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseCard
                logoText="Deniz Çerçeve"
                columns={[{ title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }] }]}
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