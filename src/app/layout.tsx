import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Deniz Çerçeve | Ankara Tuval, Şövale ve Çerçeve İmalatı',
  description: '1974\'ten beri Ankara\'nın tuval, şövale, kanvas tablo şasesi ve profesyonel çerçeve imalatçısı. Aracısız, kaliteli ve hızlı üretim.',
  openGraph: {
    "title": "Deniz Çerçeve | Ankara İmalattan Satış",
    "siteName": "Deniz Çerçeve",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
