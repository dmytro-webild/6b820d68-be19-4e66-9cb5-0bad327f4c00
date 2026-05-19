"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
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
            <NavbarStyleCentered navItems={navLinks} />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardGallery
                title="Ankara’da Resim ve Tablo Çerçeveleme Merkezi"
                description="1974’ten beri 3 kuşak tecrübe, özel ölçü ve imalattan doğrudan satış ile sanat eserlerinizi koruyoruz."
                background={{ variant: "plain" }}
                mediaItems={[{ imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000" }, { imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000" }, { imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000" }]}
            />
        </div>

        <div id="products" data-section="products">
            <ProductCardThree
                title="Hizmetlerimiz"
                description="Resim, tablo, puzzle, diploma, forma, ayna ve rölyef çerçeveleme hizmetleri."
                products={[{ id: "p1", name: "Resim & Tablo", price: "Teklif Al", imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000" }, { id: "p2", name: "Puzzle & Diploma", price: "Teklif Al", imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000" }, { id: "p3", name: "Ayna & Rölyef", price: "Teklif Al", imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000" }]}
                gridVariant="three-columns-all-equal-width"
                animationType="slide-up"
                textboxLayout="split"
            />
        </div>

        <div id="pricing" data-section="pricing">
            <PricingCardOne
                title="Fiyatlandırma Faktörleri"
                description="Çerçeve kalitesi, cam türü ve boyutlara göre değişkenlik gösteren fiyatlandırma."
                plans={[{ id: "f1", badge: "Bilgi", price: "Keşif", subtitle: "Detaylar için teklif alın", features: ["Ölçüye göre üretim", "Malzeme çeşitliliği", "Profesyonel montaj"] }]}
                animationType="slide-up"
                textboxLayout="default"
            />
        </div>

        <div id="process" data-section="process">
            <MetricCardTwo
                title="4 Adımlı Süreç"
                description="İhtiyacınızı belirleyin, en kısa sürede çerçeveleyelim."
                metrics={[{ id: "1", value: "1", description: "Ölçüleri belirtin" }, { id: "2", value: "2", description: "Model seçimi" }, { id: "3", value: "3", description: "Özenli Üretim" }, { id: "4", value: "4", description: "Teslimat & Montaj" }]}
                gridVariant="uniform-all-items-equal"
                animationType="slide-up"
                textboxLayout="default"
            />
        </div>

        <div id="why-choose-us" data-section="why-choose-us">
            <FeatureCardSixteen
                title="Neden Deniz Çerçeve?"
                description="Güvenilir zanaatkarlık, köklü geçmiş."
                positiveCard={{ items: ["1974'ten beri tecrübe", "Özel ölçü imkanı", "Hızlı teslimat"] }}
                negativeCard={{ items: ["Aracı yok", "Düşük kalite yok", "Gecikme yok"] }}
                animationType="slide-up"
                textboxLayout="default"
            />
        </div>

        <div id="seo" data-section="seo">
            <ContactText
                text="Deniz Çerçeve olarak Ankara genelinde, profesyonel resim ve tablo çerçeveleme hizmetleri sunuyoruz. Sanat eserlerinizi en iyi kalitede ve uzun ömürlü malzemelerle çerçeveleyerek yaşam alanlarınıza değer katıyoruz. Ankara çerçeveleme merkezi arayışınızda 50 yıllık tecrübemizle yanınızdayız."
                background={{ variant: "plain" }}
            />
        </div>

        <div id="gallery" data-section="gallery">
            <HeroBillboardGallery
                title="Galeri"
                description="Atölyemizden örnekler."
                background={{ variant: "plain" }}
                mediaItems={[{ imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000" }, { imageSrc: "https://images.unsplash.com/photo-1549490349-8643362247b0?q=80&w=2000" }, { imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000" }]}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqDouble
                title="Sıkça Sorulan Sorular"
                description="En çok merak edilenler."
                faqs={[{ id: "f1", title: "Özel ölçü yapıyor musunuz?", content: "Evet, her türlü eserinize özel ölçü alıyoruz." }]}
                faqsAnimation="slide-up"
                textboxLayout="default"
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

        <div id="contact-details" data-section="contact-details">
            <ContactText
                text="Adres: Ankara, Türkiye | Tel: 0555 000 00 00 | E-posta: info@denizcerceve.com | Saatler: 09:00 - 19:00"
                background={{ variant: "plain" }}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterSimple
                columns={[{ title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }] }]}
                bottomLeftText="© 2025 Deniz Çerçeve"
                bottomRightText="Ankara"
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