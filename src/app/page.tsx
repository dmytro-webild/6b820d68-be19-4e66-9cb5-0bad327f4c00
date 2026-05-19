"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TimelinePhoneView from '@/components/cardStack/layouts/timelines/TimelinePhoneView';
import { Award, Box, Users, Phone } from "lucide-react";

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
            <NavbarStyleFullscreen
              navItems={[
                { name: "Anasayfa", id: "hero" },
                { name: "Süreç", id: "process" },
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
              buttons={[{ text: "Teklif Al", href: "#contact" }, { text: "WhatsApp’tan Yaz", href: "#" }]}
              mediaItems={[
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1779187093229-9mf4zg12.png" },
                { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-painter-indoors_23-2150182578.jpg" },
                { imageSrc: "http://img.b2bpic.net/free-photo/red-deers-with-white-leaves-painted-wooden-board_1304-3707.jpg" }
              ]}
            />
        </div>

        <div id="process" data-section="process">
          <TimelinePhoneView
            title="Üretim Sürecimiz"
            description="Siparişten teslimata 4 kolay adım."
            textboxLayout="default"
            animationType="slide-up"
            useInvertedBackground={false}
            items={[
              { trigger: "Ölçü Alımı", content: "İhtiyacınız olan boyutları belirleyin." },
              { trigger: "Malzeme Seçimi", content: "Ahşap ve tuval kalitesini seçin." },
              { trigger: "Üretim", content: "Atölyemizde özenle üretelim." },
              { trigger: "Teslimat", content: "Ankara içi hızlı teslimat." }
            ]}
          />
        </div>

        <div id="about" data-section="about">
            <AboutMetric
              title="1974'ten Bugüne Zanaat"
              useInvertedBackground={false}
              metrics={[
                { icon: Award, label: "Tecrübe", value: "50+ Yıl" },
                { icon: Box, label: "İmalat", value: "100%" },
                { icon: Users, label: "Memnun Müşteri", value: "10.000+" },
              ]}
            />
        </div>

        <div id="products" data-section="products">
            <ProductCardThree
              animationType="slide-up"
              textboxLayout="split"
              gridVariant="three-columns-all-equal-width"
              title="Ürünlerimiz"
              useInvertedBackground={false}
              description="Özel ölçü imkanı ile imalattan direkt satış."
              products={[
                { id: "p1", name: "Tuval Üretimi", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/photo-frame_1203-3262.jpg?_wi=1" },
                { id: "p2", name: "Resim Çerçeveleme", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/blank-frames-wall_23-2148875414.jpg?_wi=1" },
                { id: "p3", name: "Tuvale Baskı", price: "Teklif Al", imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286577.jpg?_wi=1" },
              ]}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqBase
              title="Sıkça Sorulan Sorular"
              description="Deniz Çerçeve ile ilgili merak ettikleriniz."
              textboxLayout="default"
              faqsAnimation="slide-up"
              useInvertedBackground={false}
              faqs={[
                { id: "q1", title: "Özel ölçü üretim yapıyor musunuz?", content: "Evet, tüm ürünlerimizde özel ölçülerde üretim sağlıyoruz." },
                { id: "q2", title: "Toplu sipariş verebilir miyiz?", content: "Evet, işletmeler için toplu üretim imkanımız mevcuttur." }
              ]}
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactSplitForm
              title="Detaylı Teklif Formu"
              description="Lütfen ihtiyacınız olan hizmeti ve boyutları belirtin."
              useInvertedBackground={false}
              inputs={[
                { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
                { name: "phone", type: "tel", placeholder: "Telefon Numaranız", required: true }
              ]}
              textarea={{ name: "details", placeholder: "Detaylar / Ölçüler" }}
            />
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-white z-50 p-4 border-t md:hidden flex justify-center gap-4">
            <a href="tel:+905550000000" className="flex items-center gap-2 font-bold">
               <Phone className="w-5 h-5" /> Bizi Arayın
            </a>
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