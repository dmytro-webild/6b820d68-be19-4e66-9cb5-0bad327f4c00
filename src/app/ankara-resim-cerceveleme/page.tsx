"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Phone, MessageCircle, FileText, MapPin, Instagram } from "lucide-react";

export default function AnkaraCercevelemePage() {
  const navLinks = [
    { name: "Anasayfa", id: "hero" },
    { name: "Hizmetler", id: "products" },
    { name: "SSS", id: "faq" },
    { name: "İletişim", id: "quote" },
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
            <ContactText
                text="Deniz Çerçeveye Ulaşın"
                buttons={[
                    { text: "Hemen Ara", href: "tel:+905550000000" },
                    { text: "WhatsApp'tan Yaz", href: "https://wa.me/905550000000" },
                    { text: "Yol Tarifi Al", href: "https://maps.google.com" },
                    { text: "Instagram", href: "https://instagram.com/denizcerceve" }
                ]}
                background={{ variant: "plain" }}
                useInvertedBackground={false}
            />
            <div className="text-center py-10">
              <p>Adres: Ankara, Türkiye</p>
              <p>Telefon: +90 555 000 0000</p>
              <p>E-posta: info@denizcerceve.com</p>
              <p>Çalışma Saatleri: 09:00 - 19:00</p>
            </div>
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
            <a href="https://maps.google.com" className="flex-1 flex flex-col items-center py-2 text-xs font-semibold"><MapPin className="size-5" />Yol Tarifi</a>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}