import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "N Design – Architecture & Web Studio",
  description: "Creative architectural and web design services based in Prague. Personalized solutions, professional visuals, and modern digital presence.",
  openGraph: {
    title: "N Design – Architecture & Web Studio",
    description: "Explore our architectural and web design projects. Based in Prague, delivering worldwide.",
    url: "https://www.ndesign.space",
    siteName: "N Design",
    images: [
      {
        url: "/ND_white_02@4x.png", // ✅ You can replace this with any image from /public
        width: 800,
        height: 600,
        alt: "N Design Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
