import type { Metadata } from "next";
import { Space_Grotesk, DM_Serif_Display, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";
import { CookieConsent } from "@/components/cookie-consent/CookieConsent";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { ChromeExtras } from "@/components/layout/ChromeExtras";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["italic"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital Marketing Agency in Dubai, UAE | AMREN Digital",
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "digital marketing agency Dubai",
    "digital marketing agency UAE",
    "digital marketing company Dubai",
    "Google Ads agency Dubai",
    "Meta Ads agency Dubai",
    "SEO agency Dubai",
    "web development Dubai",
    "social media marketing Dubai",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSerif.variable} ${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <MotionProvider>
          <JsonLd data={[organizationSchema(), websiteSchema()]} />
          <SmoothScroll />
          <ScrollProgressBar />
          <div className="grain" />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ChromeExtras />
          <CookieConsent />
          <AnalyticsScripts />
        </MotionProvider>
      </body>
    </html>
  );
}
