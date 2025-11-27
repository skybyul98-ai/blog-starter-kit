import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import type { Metadata } from "next";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

export const metadata: Metadata = {
  title: "깔끔한 친구들",
  description: "천천히 읽어주세요. 깔끔하지만 따뜻한 공간입니다.",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "깔끔한 친구들",
    description: "천천히 읽어주세요. 깔끔하지만 따뜻한 공간입니다.",
    type: "website",
    url: "https://yourdomain.com",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#A68572"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#FCFAF8" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#FCFAF8" />
      </head>
      <body className="bg-background text-text font-sans antialiased">
        <ThemeSwitcher />
        <Header />
        <div className="min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
