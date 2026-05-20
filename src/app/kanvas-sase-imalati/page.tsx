"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import AboutMetric from '@/components/sections/about/AboutMetric';
import { Box } from "lucide-react";

export default function SaseImalati() {
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
        <NavbarStyleCentered
          navItems={[{ name: "Anasayfa", id: "/" }, { name: "Kanvas Tablo", id: "/kanvas-tablo-magazasi" }, { name: "Şase İmalatı", id: "/kanvas-sase-imalati" }, { name: "İletişim", id: "#quote" }]}
          brandName="Deniz Çerçeve"
        />
        <div className="pt-32 pb-20 px-6">
          <h1 className="text-5xl font-bold mb-8">Kanvas Şase İmalatı</h1>
          <p className="text-xl mb-12 text-gray-600">Sanat eserlerinizi uzun yıllar koruyacak, fırınlanmış ahşaptan özel ölçü kanvas şase imalatı hizmeti sunuyoruz.</p>
          <AboutMetric 
            title="Neden Bizim Şaselerimiz?"
            useInvertedBackground={true}
            metrics={[
              { icon: Box, label: "Malzeme", value: "Fırınlanmış Çam" },
              { icon: Box, label: "Ölçü", value: "Milimetrik Kesim" },
              { icon: Box, label: "Dayanıklılık", value: "Esnemez Yapı" }
            ]}
            metricsAnimation="slide-up"
          />
        </div>
        <div id="quote"><ContactCenter title="Şase İmalatı Teklifi Alın" description="Projeniz için gereken ahşap şase ölçülerini paylaşın, imalat detaylarını görüşelim." tag="Teklif" /></div>
        <FooterSimple columns={[{ title: "Deniz Çerçeve", items: [{ label: "Anasayfa", href: "/" }] }]} bottomLeftText="© 2025 Deniz Çerçeve" bottomRightText="Ankara" />
      </ReactLenis>
    </ThemeProvider>
  );
}