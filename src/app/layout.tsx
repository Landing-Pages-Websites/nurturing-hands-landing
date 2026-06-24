import type { Metadata } from "next";
import { Judson, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const SITE_ID = "8ee9a3df-549e-4d3c-82db-f6b441934cc3";
const SITE_KEY = "kzdwcindd1jrnksr";
// GA4 from the customer's live site (optional). No GTM container exists for
// this customer, so GTM is intentionally omitted (gtmId left empty).
const GA4_ID = "G-01YFK2TQE7";

export const metadata: Metadata = {
  metadataBase: new URL("https://nurturinghandsdoulas.com"),
  title:
    "Bay Area Doula Support for Birth, Postpartum & Newborn Care | Nurturing Hands Doulas",
  description:
    "Nurturing Hands Doulas matches your family with a certified doula for birth, postpartum recovery, and overnight newborn care across the San Francisco Bay Area — and helps you explore how Carrot, HSA, and FSA benefits may apply. Book a free, no-obligation discovery call.",
  openGraph: {
    title: "Nurturing Hands Doulas — Bay Area Birth, Postpartum & Newborn Support",
    description:
      "Certified, team-based doula care for Bay Area families. Free, no-obligation discovery call — and help exploring how your Carrot, HSA, or FSA benefits may apply.",
    type: "website",
    siteName: "Nurturing Hands Doulas",
    images: ["/images/nh-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en" className={`${judson.variable} ${jost.variable}`}>
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        {/* MegaTag config — MUST precede the optimizer script. No GTM container
            exists for this customer, so gtmId is intentionally empty. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"",gaId:"${GA4_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        {/* Google Analytics 4 (customer's live-site tag — optional) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
        </Script>
        {/* Mega optimizer */}
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Shared MEGA CallTrackingMetrics — required, do not remove. */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
