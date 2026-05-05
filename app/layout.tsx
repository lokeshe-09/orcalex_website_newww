import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrcaLex Technologies | Advanced AI Solutions",
  description: "OrcaLex Technologies delivers cutting-edge AI capabilities through RAG, fine-tuning, and agentic systems for education, manufacturing, and enterprise applications.",
  keywords: "AI services, Gen AI services, AI solutions, best ai services, top ai services, best ai solutions, top ai solutions, artificial intelligence, RAG, retrieval-augmented generation, LLM, fine-tuning, agentic systems, edtech, education technology, GRPO, AI services, AI solutions, Gen AI solutions, machine learning services,artificial intelligence , artificial intelligence consulting, NLP, computer vision, enterprise AI, AI development, ML models, AI integration, AI automation, AI consulting, AI implementation, AI strategy, AI transformation, AI innovation",
  authors: [{ name: "OrcaLex Technologies" }],
  robots: "index, follow",
  openGraph: {
    title: "OrcaLex Technologies | Advanced AI Solutions",
    description: "Cutting-edge AI capabilities through RAG, fine-tuning, and agentic systems",
    url: "https://orcalex.ai",
    siteName: "OrcaLex Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://orcalex.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OrcaLex Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrcaLex Technologies | Advanced AI Solutions",
    description: "Cutting-edge AI capabilities through RAG, fine-tuning, and agentic systems",
    creator: "@orcalextech",
    images: ["https://orcalex.ai/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://orcalex.ai",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

