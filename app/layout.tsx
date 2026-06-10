import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeScript from "@/components/ThemeScript";
import {
  getPersonJsonLd,
  getProjectsJsonLd,
  getWebsiteJsonLd,
  siteMetadata,
} from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: "Engr Haris Khan" }],
  creator: "Engr Haris Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: "Engr Haris Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    getPersonJsonLd(),
    getWebsiteJsonLd(),
    ...getProjectsJsonLd(),
  ];

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full">
        {jsonLd.map((schema, i) => (
          <script
            key={`jsonld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
